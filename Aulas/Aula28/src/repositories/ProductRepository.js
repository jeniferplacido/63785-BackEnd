class ProductRepository {
    constructor(productDAO) {
        this.productDAO = productDAO;
    }

    getProducts() {
        return this.productDAO.getProducts();
    }

}

module.exports = ProductRepository;