// Importa o módulo express para criar um roteador
const express = require('express');
// Cria uma instância do roteador express
const router = express.Router();
// Importa o controlador de produto definido em outro arquivo
const produtoController = require('../controllers/produtoController');

// Define uma rota GET para o caminho '/home' que usa o método 'getProdutos' do controlador de produto
router.get('/home', produtoController.getProdutos);

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;