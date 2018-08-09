import Product from "./Product.js";

class Store {
    constructor(
        name = "Tienda",
        tillTotal = 200
    ) {
        this.name = name;
        this.products = [
            new Product("quick draws(set)", 8, 59), 
            new Product("runners", 17, 7), 
            new Product("cams", 10, 129),
            new Product("stoppers(set)", 6, 78),
            new Product("atc", 7, 49)];
            this.tillTotal = tillTotal;
            this.sale = false;
        }
        getItems() {
            return this.products
        }
        updateQuantity(productIndex){
            if (this.products[productIndex].quantity <= 0){
                return 0
            }
            return this.products[productIndex].quantity--;
        }
        purchase(purchaseTotal){
            this.tillTotal += purchaseTotal;
        }
    }


    
    console.log("hello from Store.js");
    export default Store;