const products = [];

//single entity 
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}