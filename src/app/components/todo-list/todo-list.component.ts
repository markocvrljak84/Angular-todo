import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `
    <div class="todo-list">
      <app-todo-item
        *ngFor="let todo of todos"
        [todo]="todo"
        (toggleComplete)="onToggleComplete($event)"
        (updateTodo)="onUpdateTodo($event)"
        (deleteTodo)="onDeleteTodo($event)"
      ></app-todo-item>
      <p *ngIf="todos.length === 0" class="empty-message">
        No todos yet. Add one above!
      </p>
    </div>
  `,
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() updateTodo = new EventEmitter<{ id: number; text: string }>();
  @Output() deleteTodo = new EventEmitter<number>();

  onToggleComplete(id: number): void {
    this.toggleComplete.emit(id);
  }

  onUpdateTodo(event: { id: number; text: string }): void {
    this.updateTodo.emit(event);
  }

  onDeleteTodo(id: number): void {
    this.deleteTodo.emit(id);
  }
}

