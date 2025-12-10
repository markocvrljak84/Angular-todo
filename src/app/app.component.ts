import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoStatsComponent } from './components/todo-stats/todo-stats.component';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent, TodoStatsComponent],
  template: `
    <main class="main">
      <div class="content">
        <h1>{{ title }}</h1>
        
        <div class="todo-container">
          <app-todo-form (todoAdded)="onTodoAdded($event)"></app-todo-form>
          
          <app-todo-list
            [todos]="todos"
            (toggleComplete)="onToggleComplete($event)"
            (updateTodo)="onUpdateTodo($event)"
            (deleteTodo)="onDeleteTodo($event)"
          ></app-todo-list>

          <app-todo-stats
            *ngIf="todos.length > 0"
            [completedCount]="completedCount"
            [totalCount]="todos.length"
          ></app-todo-stats>
        </div>
      </div>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Todo App';
  todos: Todo[] = [];
  completedCount = 0;
  private subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Subscribe to todos observable
    const todosSub = this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
      this.completedCount = this.todoService.getCompletedCount();
    });
    this.subscription.add(todosSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTodoAdded(text: string): void {
    this.todoService.addTodo(text);
  }

  onToggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
  }

  onUpdateTodo(event: { id: number; text: string }): void {
    this.todoService.updateTodo(event.id, { text: event.text });
  }

  onDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
