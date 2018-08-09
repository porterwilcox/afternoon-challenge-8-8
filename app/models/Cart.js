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


    // addSubTotal(itemPrice){
    //     return this.subTotal += itemPrice;
    // }
    // addTax(itemPrice){
    //     return this.tax += itemPrice*.06;
    // }
    // addTotal(subTotalNow, taxNow){
    //     this.total += subTotalNow + taxNow;
    // }
}

console.log("hello from Cart.js");
export default Cart;