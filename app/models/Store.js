import Product from "./Product.js";

class Store {
    constructor(
        name = "Tienda",
        tillTotal = 200
    ) {
        this.name = name;
        this.products = [
            new Product("quick draws", 8, 59.95), 
            new Product("runners", 17, 6.99), 
            new Product("cams", 10, 129.95),
            new Product("stoppers", 6, 79.49),
            new Product("atc", 7, 49.99)];
            this.tillTotal = tillTotal;
            this.sale = false;
        }
        newTillTotal(purchaseTotal) {
            this.tillTotal += purchaseTotal;
        }
        getItems() {
            return this.products
        }
    }
    
    console.log("hello from Store.js");
    export default Store;