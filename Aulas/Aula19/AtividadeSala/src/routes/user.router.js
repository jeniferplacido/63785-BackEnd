// Importa o módulo express para criar um roteador
const express = require('express');
// Cria uma instância do roteador express
const router = express.Router();

// Importa o modelo de usuário definido em outro arquivo
const User = require('../models/User');

// Importa os middlewares de autenticação e autorização
const { autenticacao } = require('../middleware/auth');
const { publico } = require('../middleware/public');
const { privado } = require('../middleware/privado');

// Define uma rota GET para o caminho '/registro'
router.get('/registro', (req, res) => {
    // Renderiza a página de registro
    res.render('registro');
});

// Define uma rota POST para o caminho '/registro'
router.post('/registro', async (req, res) => {
    try {
        // Obtém os campos do corpo da requisição
        const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
        // Verifica se já existe um usuário com o mesmo email
        const exiteUsuario = await User.findOne({ email });
        if (exiteUsuario) {
            // Se o email já existe, envia uma resposta de erro com status 400
            return res.status(400).send('Email já existe');
        }
        // Cria um novo documento de usuário com os dados fornecidos
        const newUser = new User({ primeiro_nome, segundo_nome, email, idade, senha });
        // Salva o novo usuário no banco de dados
        await newUser.save();
        // Redireciona para a página de login com uma mensagem de sucesso
        res.redirect('/login', { message: 'Usuário registrado com sucesso' });
    } catch (error) {
        // Exibe uma mensagem de erro no console se a criação falhar
        console.error('Erro ao registrar usuário', error);
        // Envia uma resposta de erro com status 500
        res.status(500).send('Erro ao registrar usuário');
    }
});

// Define uma rota GET para o caminho '/perfil' que usa o middleware de autenticação
router.get('/perfil', autenticacao, (req, res) => {
    // Obtém os dados do usuário da sessão
    const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
    // Renderiza a página de perfil com os dados do usuário
    res.render('perfil', { primeiro_nome, segundo_nome, email, idade });
});

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;