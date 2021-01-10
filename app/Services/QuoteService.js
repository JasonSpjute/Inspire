import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and update the State
class QuoteService {
    async getQuote(){
        let res = await api.get('quotes')
        console.log(res.data.quote)
        ProxyState.quote = new Quote(res.data.quote)
        
    }
}

const quoteService = new QuoteService();
export default quoteService;