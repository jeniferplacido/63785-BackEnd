const express = require('express');
const brinquedoController = require('../controller/brinquedoController');
const router = express.Router();

// Rota para obter todos os brinquedos
router.get('/', brinquedoController.obterTodosBrinquedos);

// Rota para adicionar um novo brinquedo
router.post('/', brinquedoController.adicionarBrinquedo);

// Rota para excluir um brinquedo pelo ID
router.delete('/:id', brinquedoController.excluirBrinquedo);

module.exports = router;
