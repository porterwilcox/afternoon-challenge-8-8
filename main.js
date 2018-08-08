import StoreController from "./app/components/storeController.js";

class App {
    constructor(){
        this.controllers = {
            myStoreController: new StoreController()
        }
    }
}

console.log("hello from main.js");
window.app = new App();