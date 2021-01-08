import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";


//TODO Dont forget to register all your controllers	
class App {
    weatherController = new WeatherController();
    todoController = new TodoController();
}


window["app"] = new App();