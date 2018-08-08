import StoreService from "./storeService.js";
let storeService = new StoreService();
let productsView = document.querySelector(".products");
let cartView = document.querySelector(".cart");

function drawProducts() {
    let products = storeService.getItems();
    let template = "";
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        template += `
        <div class="product-display">
        <div>
        <img src="${product.image}" alt="product image" />
        </div>
        <h2>${product.name}</h2>
        <h3>$${product.price}</h3>
        <h3>remaining: ${product.quantity}</h3>
        <div class="purchase">
        <button class="product-button" onclick="app.controllers.storeController.addProductToCart(${i})">
        <span>add to</span>
        <i class="fas fa-shopping-cart cart-icon"></i>
        </button>
        </div>
        </div>
        `
    }
    productsView.innerHTML = template;
}

function drawCart() {
    let cart = storeService.Cart;
    let template = `
    <div>
    <h2>Your Cart:</h2>
    <h3>subtotal: ${cart.subTotal}</h3>
    <h3>tax: ${cart.tax}</h3>
    <h3>total: ${cart.total}</h3>
    </div>
    `
    cartView.innerHTML = template;
}

class StoreController {
    constructor() {
        drawProducts();
        drawCart();
    }
    // addSubTotal(prodocutIndex) {
    //     storeService.addSubTotal(prodocutIndex);
    //     drawCart();
    // }
    // addTax(prodocutIndex) {
    //     storeService.addTax(prodocutIndex);
    //     drawCart();
    // }
    // addTotal(prodocutIndex) {
    //     storeService.addTotal(prodocutIndex);
    //     drawCart();
    // }
    addProductToCart(prodocutIndex) {
       storeService.addProductToCart(prodocutIndex)
       drawCart()
        // this.addSubTotal(prodocutIndex);
        // this.addTax(prodocutIndex);
    }
}

console.log("hello from StoreController.js");
export default StoreController;