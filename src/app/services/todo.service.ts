import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  public todos$: Observable<Todo[]> = this.todosSubject.asObservable();
  private nextId = 1;

  constructor() {}

  getTodos(): Todo[] {
    return this.todosSubject.value;
  }

  addTodo(text: string): void {
    if (text.trim()) {
      const newTodo: Todo = {
        id: this.nextId++,
        text: text.trim(),
        completed: false
      };
      const currentTodos = this.todosSubject.value;
      this.todosSubject.next([...currentTodos, newTodo]);
    }
  }

  updateTodo(id: number, updates: Partial<Todo>): void {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = currentTodos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    this.todosSubject.next(updatedTodos);
  }

  toggleComplete(id: number): void {
    const todo = this.todosSubject.value.find(t => t.id === id);
    if (todo) {
      this.updateTodo(id, { completed: !todo.completed });
    }
  }

  deleteTodo(id: number): void {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next(currentTodos.filter(t => t.id !== id));
  }

  getCompletedCount(): number {
    return this.todosSubject.value.filter(t => t.completed).length;
  }
}

