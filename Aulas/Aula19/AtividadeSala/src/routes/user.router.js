const express = require('express');
const router = express.Router();

const User = require('../models/User');

const {autenticacao} = require('../middleware/auth');
const {publico} = require('../middleware/public');
const {privado} = require('../middleware/privado');


router.get('/registro', (req, res) => {
    res.render('registro');
});

router.post('/registro', async (req, res) => {
    try{
        const {primeiro_nome, segundo_nome, email, idade, senha} = req.body;
        const exiteUsuario = await User.findOne({email});
        if(exiteUsuario){
            return res.status(400).send('Email já existe');
    }
    const newUser = new User({primeiro_nome, segundo_nome, email, idade, senha});
    await newUser.save();
    res.redirect('/login', {message: 'Usuário registrado com sucesso'});
    }catch(error){
        console.error('Erro ao registrar usuário', error);
        res.status(500).send('Erro ao registrar usuário');
    }
});

router.get('/perfil', autenticacao, (req, res) => {
    const {primeiro_nome, segundo_nome, email, idade} = req.session.user;
    res.render('perfil', {primeiro_nome, segundo_nome, email, idade});
});

module.exports = router;