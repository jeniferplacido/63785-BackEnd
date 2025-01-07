const ProductDAO = require('../dao/ProductDAO');
const ProductRepository = require('../repositories/ProductRepository');


const ProductDaO = new ProductDAO();
const ProdutRepository = new ProductRepository(ProductDaO);


module.exports = {
    ProdutRepository
};