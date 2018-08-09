let productsInCart = []
let taxRate = 0
class Cart {
    constructor(taxrate){
        taxRate = taxrate
    }    
    addToCart(product){
        productsInCart.push(product)
    }
    get cartSubTotal(){
        let total = 0
        productsInCart.forEach(p => total += p.price)
        return total
    }
    get cartTax(){
        return this.cartSubTotal * taxRate
    }
    get cartTotal(){
        return (this.cartSubTotal * taxRate) + this.cartSubTotal;
    }
    purchase(){
        while (productsInCart.length){
            productsInCart.pop();
        }
    }
}

console.log("hello from Cart.js");
export default Cart;