import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
  switch(){
    let degree = ProxyState.weather
    if (document.getElementById('celsius').checked == true){
      document.getElementById('temp').innerHTML = `<h1>${degree.celsius}&#176C</h1>`
    }else{
      document.getElementById('temp').innerHTML = `<h1>${degree.fahrenheit}&#176F</h1>`
    }
  }
}
