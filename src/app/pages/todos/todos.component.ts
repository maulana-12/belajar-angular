import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  todoValue?: Todo;
  //  Two Way, kita bisa memanfaatkan getter and setter
  get todo(): Todo {
    return this.todoValue as Todo
  }

  set todo(todo: Todo) {
    this.onSaveTodos(todo)
  }
  constructor() { }
  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos(): void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string
    if (!sessionTodos) {
      const todos = [
        { id: 1, name: "First Todo", isDone: false },
        { id: 2, name: "Second Todo", isDone: true },
        { id: 3, name: "Third Todo", isDone: false }
      ]
      sessionStorage.setItem('todos', JSON.stringify(todos))
      this.todos = todos
    } else {
      this.todos = JSON.parse(sessionTodos)
    }
  }

  onSaveTodos(todo: Todo): void {
    if (todo.id) {
      this.todos = this.todos.map((item) => {
        if (item.id === todo.id) {
          item = todo
        }
        return item;
      });
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  onEditTodos(todo: Todo): void {
    this.todoValue = todo
  }

  onToggleTodos(todo: Todo): void {
    console.log('todos.component.onToggleTodo:', todo);
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    const idx = this.todos.indexOf(todo);
    if (todo.isDone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Can\'t delete todo',
      })
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.todos.splice(idx, 1);
          sessionStorage.setItem('todos', JSON.stringify(this.todos));
        }
      });
    }
  }

}

