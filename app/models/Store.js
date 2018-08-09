import Product from "./Product.js";

class Store {
    constructor(
        name = "Tienda",
        tillTotal = 200
    ) {
        this.name = name;
        this.products = [
            new Product("quick draws(set)", 8, 59, "https://content.backcountry.com/images/items/900/MRC/MRC0124/ONECOL.jpg"), 
            new Product("runners", 17, 7, "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=7583&index=0&w=605&h=434"), 
            new Product("cams", 10, 129, "http://cdn.shopify.com/s/files/1/1864/0769/products/dragon2-cam_set_0_5_grande.jpg?v=1508732798"),
            new Product("stoppers(set)", 6, 78, "http://outsider-bg.com/wp-content/uploads/2017/08/set_chocks.jpg"),
            new Product("atc", 7, 49, "https://mojagear.com/wp-content/uploads/2015/08/Petzl-REVERSO-4-Belay-Rappel-Device-orange-en-e1454359100924.jpg")];
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