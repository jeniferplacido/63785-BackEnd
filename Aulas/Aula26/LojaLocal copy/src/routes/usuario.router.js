const express = require('express');
const usuarioController = require('../controller/usuarioController');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/', usuarioController.obterTodosUsuarios);

// Rota para adicionar um novo usuário
router.post('/', usuarioController.adicionarUsuario);

// Rota para excluir um usuário pelo ID
router.delete('/:id', usuarioController.excluirUsuario);

module.exports = router;
