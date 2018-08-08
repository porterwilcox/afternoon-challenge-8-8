import Store from "../models/Store.js";
import "../models/Product.js"
import Cart from "../models/Cart.js";

let laTienda = new Store("La Tienda");
class StoreService {
    constructor(){}
    getItems() {
        return laTienda.products;
    }
    
}

console.log("hello from StoreService.js");
export default StoreService;