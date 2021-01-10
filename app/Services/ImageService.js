import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "../Services/AxiosService.js"

class ImageService {
    async getImage() {
        let res = await api.get('images')
        ProxyState.image = new Image(res.data)
    }

}

const imageService = new ImageService();
export default imageService;