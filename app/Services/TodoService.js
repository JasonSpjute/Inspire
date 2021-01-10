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
    //this.getTodos()
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    todo.completed = document.getElementById(todoId).checked
    let completeData = {completed: todo.completed}
    await api.put(url + todoId, completeData);    
  }

  async removeTodo(todoId) {
    await api.delete(url + todoId)
    ProxyState.todos = ProxyState.todos.filter(f=> f.id != todoId)
  }
}

const todoService = new TodoService();
export default todoService;