import StoreService from "./storeService.js";
let storeService = new StoreService();
let productsView = document.querySelector(".products");

function drawProducts() {
    let products = storeService.getItems();
    let template = "";
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
        template += `
            <div>
                <img src="${product.image}" alt="product image" />
            </div>
            <h2>${product.name}</h2>
            <h3>$${product.price}</h3>
            <h3>remaining: ${product.quantity}</h3>
        `
    }
    productsView.innerHTML = template;
}

class StoreController {
    constructor(){
        drawProducts()
    }
}

console.log("hello from StoreController.js");
export default StoreController;