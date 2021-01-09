import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'jason/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.map(f=> new Todo(f))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    
    todo.completed = document.getElementById(todoId).checked
    
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    console.log(todo.completed)
    let completeData = {completed: todo.completed}
    let res = await api.put(url + todoId, completeData);
    console.log(res.data)
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;