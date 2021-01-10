
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

function _drawImage(){
    let image = ProxyState.image.url
    console.log(image)
    document.body.style.backgroundImage = `url('${image}')`
}
export default class ImageController {
    constructor(){
        ProxyState.on('image', _drawImage)
        this.getImage()
        
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