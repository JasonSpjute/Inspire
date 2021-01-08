export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    //(k-273.15)*9/5+32
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor((data.main.temp -273.15)*9/5+32)
    this.celsius = Math.floor(data.main.temp-273.15)
    console.log(this.fahrenheit)
    console.log(this.celsius)
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