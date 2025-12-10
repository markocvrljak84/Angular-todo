import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div 
      class="todo-item"
      [class.completed]="todo.completed"
      [class.editing]="isEditing"
    >
      <input 
        type="checkbox" 
        [checked]="todo.completed"
        (change)="onToggleComplete()"
        class="todo-checkbox"
        [disabled]="isEditing"
      />
      <span *ngIf="!isEditing" class="todo-text">{{ todo.text }}</span>
      <input 
        *ngIf="isEditing"
        type="text"
        [(ngModel)]="editText"
        (keyup.enter)="onSaveEdit()"
        (keyup.escape)="onCancelEdit()"
        class="edit-input"
        autofocus
      />
      <div class="todo-actions">
        <button 
          *ngIf="!isEditing"
          (click)="onStartEdit()"
          class="edit-button"
          [disabled]="todo.completed"
        >
          ✏️
        </button>
        <button 
          *ngIf="isEditing"
          (click)="onSaveEdit()"
          class="save-button"
        >
          ✓
        </button>
        <button 
          *ngIf="isEditing"
          (click)="onCancelEdit()"
          class="cancel-button"
        >
          ✕
        </button>
        <button (click)="onDelete()" class="delete-button">×</button>
      </div>
    </div>
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() updateTodo = new EventEmitter<{ id: number; text: string }>();
  @Output() deleteTodo = new EventEmitter<number>();

  isEditing = false;
  editText = '';

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }

  onStartEdit(): void {
    this.isEditing = true;
    this.editText = this.todo.text;
  }

  onSaveEdit(): void {
    if (this.editText.trim()) {
      this.updateTodo.emit({ id: this.todo.id, text: this.editText.trim() });
    }
    this.onCancelEdit();
  }

  onCancelEdit(): void {
    this.isEditing = false;
    this.editText = '';
  }

  onDelete(): void {
    if (this.isEditing) {
      this.onCancelEdit();
    }
    this.deleteTodo.emit(this.todo.id);
  }
}

