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
            tax: 0.06,
            total: yourCart.cartTotal
        }
    }
    addProductToCart(productIndex){
        yourCart.addToCart(laTienda.products[productIndex])
    }
    // addSubTotal(productIndex){
    //     let productPrice = laTienda.getPrice(productIndex);
    //     return yourCart.addSubTotal(productPrice);
    // }
    // addTax(productIndex){
    //     let productPrice = laTienda.getPrice(productIndex);
    //     return yourCart.addTax(productPrice);
    // }
    // addTotal(productIndex){
        
    // }
}

console.log("hello from StoreService.js");
export default StoreService;