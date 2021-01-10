export default class Weather {
  constructor(data) {
    
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor((data.main.temp -273.15)*9/5+32)
    this.celsius = Math.floor(data.main.temp-273.15)
  }
  get Template(){
    return /*html*/ `
    <div class="row">
                <div class = "card shadow text-white op">
                    <div class = "card-body">
                        
                        <h5 class = "card-subtitle">${this.city}</h5>
                        <h1 class = "card-body" id = "temp">${this.fahrenheit}&#176F</h1>
                        <div class="custom-control custom-switch">
                        <input type="checkbox"  class="custom-control-input" id="celsius" onchange="app.weatherController.switch()">
                        <label class="custom-control-label" for="celsius">Show Celcius</label>
                        </div>
                    </div>
                </div>
            </div>
    `
  }
}