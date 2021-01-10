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
                <div class = "card shadow">
                    <div class = "card-body">
                        <h3 class = "card-title">Weather</h3>
                        <h5 class = "card-subtitle">${this.city}</h5>
                        <h6 class = "card-body">Temp: ${this.fahrenheit}&#176F ${this.celsius}&#176C</h6>
                    </div>
                </div>
            </div>
    `
  }
}