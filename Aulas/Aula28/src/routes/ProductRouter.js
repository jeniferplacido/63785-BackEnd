const express = require('express');
const {ProdutRepository} = require('../services/index');

const router = express.Router();


router.get('/', (req, res)=>{
    const products = ProdutRepository.getProducts();
    res.status(200).json(products); // retornar o array vazio
})


module.exports = router;