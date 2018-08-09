class Product {
    constructor(
        name = '',
        quantity,
        price,
        image = "//placehold.it/200X200"
    ){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
    }
}

console.log("hello from Products.js");
export default Product;