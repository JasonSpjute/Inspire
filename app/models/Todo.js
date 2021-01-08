export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed
    this.description = data.description
  }

  get Template() {
    return /*html*/ `
        <div class="row">
            <div class="col-1 text-center">
              <input id="${this.id}" type="checkbox" onchange="app.TodoController.toggleTodoStatus('${this.id}')">
              </div>
            <div class="col-9">
                <p>${this.description}</p>
            </div>
            <div class="col-1">
                <button class="fas fa-trash-alt btn text-danger" onclick="app.itemController.delete('${this.id}')"></button>
            </div>
        </div>
        `;
  }
}
