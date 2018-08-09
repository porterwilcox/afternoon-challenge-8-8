import Store from "../models/Store.js";
import "../models/Product.js";
import Cart from "../models/Cart.js";

let laTienda = new Store("La Tienda");
let yourCart = new Cart(.06);

class StoreService {
    constructor() { }
    getItems() {
        return laTienda.products;
    }
    get Cart() {
        return {
            subTotal: yourCart.cartSubTotal,
            tax: yourCart.cartTax,
            total: yourCart.cartTotal
        }
    }
    get Store() {
        return {
            name: laTienda.name,
            tillTotal: laTienda.tillTotal
        }
    }
    addProductToCart(productIndex){
        let newQuantity = laTienda.updateQuantity(productIndex);
        if (newQuantity){
            yourCart.addToCart(laTienda.products[productIndex]);
        }
    }
    purchase(){
        laTienda.purchase(yourCart.cartTotal);
        yourCart.purchase();
    }
}

console.log("hello from StoreService.js");
export default StoreService;