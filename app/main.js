import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";


class App {
    weatherController = new WeatherController();
    todoController = new TodoController();
    imageController = new ImageController();
    quoteController = new QuoteController()
}


window["app"] = new App();