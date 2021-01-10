import { ProxyState } from "../AppState.js";

import todoService from "../Services/TodoService.js";

function _drawTodos() {
  let template = ''
  let todo = ProxyState.todos
  todo.forEach(l => template += l.Template )
  document.getElementById('todos').innerHTML = template
}

function _drawCount(){
  let count = ProxyState.todos.filter(l => l.completed == true)
  document.getElementById('count').innerText = count.length.toString()
}


export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    ProxyState.on("todos", _drawCount)
    _drawTodos()
    _drawCount()
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
       description: form.newTodo.value
     };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }


  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
      _drawCount()
    } catch (error) {
      console.error(error)
    }
    
  }

  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}