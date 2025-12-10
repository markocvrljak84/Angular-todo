import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="todo-input-section">
      <input 
        type="text" 
        [(ngModel)]="newTodoText" 
        (keyup.enter)="onAddTodo()"
        placeholder="Add a new todo..."
        class="todo-input"
      />
      <button (click)="onAddTodo()" class="add-button">Add</button>
    </div>
  `,
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  newTodoText = '';
  @Output() todoAdded = new EventEmitter<string>();

  onAddTodo(): void {
    if (this.newTodoText.trim()) {
      this.todoAdded.emit(this.newTodoText);
      this.newTodoText = '';
    }
  }
}

