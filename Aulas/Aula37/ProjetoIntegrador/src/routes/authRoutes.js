// Importa o módulo express para criar um roteador
const express = require('express');
// Cria uma instância do roteador express
const router = express.Router();
// Importa o controlador de autenticação definido em outro arquivo
const authController = require('../controllers/authController');

// Define uma rota GET para o caminho '/registro'
router.get('/registro', (req, res) => {
    // Renderiza a view 'registro' para a página de registro
    res.render('registro');
});

// Define uma rota POST para o caminho '/registro' que usa o método 'registro' do controlador de autenticação
router.post('/registro', authController.registro);

// Define uma rota GET para o caminho '/login'
router.get('/login', (req, res) => {
    // Renderiza a view 'login' para a página de login
    res.render('login');
});

// Define uma rota POST para o caminho '/login' que usa o método 'login' do controlador de autenticação
router.post('/login', authController.login);

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;