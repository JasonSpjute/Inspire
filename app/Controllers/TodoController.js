import { ProxyState } from "../AppState.js";

import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  let todo = ProxyState.todos
  todo.forEach(l => template += l.Template )
  console.log()
  document.getElementById('todos').innerHTML = template
}

function _drawCount(){
  let count = ProxyState.todos.filter(l => l.completed == true)
  console.log(count.length)
  document.getElementById('count').innerText = count.length.toString()
}


export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
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
    // TODO build the todo object from the data that comes into this method
    var todo = {
       description: form.newTodo.value
     };
    console.log(todo)
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
      _drawCount()
    } catch (error) {
      console.error(error)
    }
    
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}