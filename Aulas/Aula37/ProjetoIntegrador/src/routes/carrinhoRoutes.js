// Importa o módulo express para criar um roteador
const express = require('express');
// Cria uma instância do roteador express
const router = express.Router();
// Importa o controlador de carrinho definido em outro arquivo
const carrinhoController = require('../controllers/carrinhoController');
// Importa o middleware de autenticação definido em outro arquivo
const authMiddleware = require('../utils/authMiddleware');

// Define uma rota GET para obter o carrinho de um usuário, usando o middleware de autenticação
router.get('/carrinho/:usuarioId', authMiddleware, carrinhoController.getCarrinho);

// Define uma rota POST para adicionar um produto ao carrinho de um usuário, usando o middleware de autenticação
router.post('/carrinho/:usuarioId', authMiddleware, carrinhoController.addCarrinho);

// Define uma rota DELETE para remover um produto do carrinho de um usuário, usando o middleware de autenticação
router.delete('/carrinho/:usuarioId/:produtoId', authMiddleware, carrinhoController.removeCarrinho);

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;