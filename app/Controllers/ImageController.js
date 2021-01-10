

import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

function _drawImage(){
    let image = ProxyState.image.url
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