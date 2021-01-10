

import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

function _drawImage(){
    let image = ProxyState.image.url
    document.body.style.backgroundImage = `url('${image}')`
}

function _drawClock(){
    let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let amOrPm = hours < 12 ? "AM" : "PM";

  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  minutes = _addZero(minutes);
  seconds = _addZero(seconds);

  let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;

  document.getElementById("clock").innerText = timeString;
  setTimeout(_drawClock, 1000)
}

function _addZero(component) {
    return component < 10 ? "0" + component : component;
  }
export default class ImageController {
    constructor(){
        ProxyState.on('image', _drawImage)
        this.getImage()
        _drawClock()
    }
    getImage(){
        try{
            imageService.getImage()
        }
        catch(error){
            console.error(error)
        }
    }
}