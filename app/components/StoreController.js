import StoreService from "./storeService.js";
let storeService = new StoreService();
let productsView = document.querySelector(".products");
let cartView = document.querySelector(".cart");
let tillView = document.querySelector(".store-till");

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
        <div class="add-to-cart">
        <button class="product-button" onclick="app.controllers.storeController.addProductToCart(${i})">
        <span>add to</span>
        <i class="fas fa-shopping-cart"></i>
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
    <button class="purchase-button" onclick="app.controllers.storeController.purchase()">
        <span>pay now</span>
        <i class="far fa-money-bill-alt"></i>
        </button>
    </div>
    `
    cartView.innerHTML = template;
}

function drawStore() {
    let store = storeService.Store;
    let template = `
        <div>
            <h2>${store.name}'s till total: $${store.tillTotal}</h2>
        </div>
    `
    tillView.innerHTML = template;
}

class StoreController {
    constructor() {
        drawProducts();
        drawCart();
        drawStore();
    }
    addProductToCart(prodocutIndex) {
       storeService.addProductToCart(prodocutIndex);
       drawProducts();
       drawCart();
    }
    purchase(){
        storeService.purchase();
        drawStore();
        drawCart();
    }
}

console.log("hello from StoreController.js");
export default StoreController;