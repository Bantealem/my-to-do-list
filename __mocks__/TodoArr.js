import LocalStorage from './localStorage.js';

export const localStorage = new LocalStorage();
class TodoArr {
  constructor() {
    this.todos = localStorage.store || [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', this.todos);
  }

  updateTodo(id, newTodo) {
    this.todos[id - 1] = newTodo;
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', this.todos);
  }

  changeCompleted(index) {
    this.todos[index - 1].completed = !this.todos[index - 1].completed;
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', this.todos);
  }

  deleteTodo(index) {
    if (this.todos.length === 1) {
      this.todos = [];
    } else {
      this.todos.splice(index, 1);
    }
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', this.todos);
  }

  clearAllTodos() {
    const filteredTodos = this.todos.filter((todo) => !todo.completed);
    this.todos = filteredTodos;
    for (let i = 0; i < this.todos.length; i += 1) {
      this.todos[i].id = i + 1;
    }
    localStorage.setItem('todos', this.todos);
  }

  getAllTodos() {
    return this.todos;
  }
}

export default TodoArr;