import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Buy groceries',
        desc: 'Milk, Bread and other essential items.',
        active: true,
      },
      {
        sno: 2,
        title: 'Buy groceries',
        desc: 'Milk, Bread and other essential items.',
        active: true,
      },
      {
        sno: 3,
        title: 'Buy groceries',
        desc: 'Milk, Bread and other essential items.',
        active: true,
      },
    ];
  }
}
