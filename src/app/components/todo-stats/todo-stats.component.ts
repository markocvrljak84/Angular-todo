import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-stats',
  standalone: true,
  template: `
    <div class="todo-stats">
      <span>{{ completedCount }} of {{ totalCount }} completed</span>
    </div>
  `,
  styleUrl: './todo-stats.component.scss'
})
export class TodoStatsComponent {
  @Input() completedCount = 0;
  @Input() totalCount = 0;
}

