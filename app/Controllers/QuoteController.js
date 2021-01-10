import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote(){
    let quote = ProxyState.quote.body
    
    document.getElementById('quote').innerText = quote
}
function _drawBy(){
    let quote = ProxyState.quote.author
    document.getElementById('by').innerHTML = quote
}
export default class QuoteController{

    constructor(){
        ProxyState.on("quote", _drawQuote)
        this.getQuote()
    }

    getQuote(){
        try{
            quoteService.getQuote()
        }
        catch(error){
            console.error(error)
        }
    }
    hover(){
        _drawBy()
    }

    out(){
        document.getElementById('by').innerHTML = ""
    }
}