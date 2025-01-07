class ProductDAO{
    constructor(){
        this.products = [];
    }

    getProducts(){
        return this.products;
    }
}

module.exports = ProductDAO;