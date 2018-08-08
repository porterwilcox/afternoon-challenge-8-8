class Cart {
    constructor(
        subTotal = 0,
        tax = 0,
        total = 0
    ){
        this.subTotal = subTotal;
        this.tax = tax;
        this.total = total;
    }
    calculateTax(subTotalNow){
        this.tax += subTotalNow*.06;
    }
    calculateTotal(subTotalNow, taxNow){
        this.total += subTotalNow + taxNow;
    }
}

console.log("hello from Cart.js");
export default Cart;