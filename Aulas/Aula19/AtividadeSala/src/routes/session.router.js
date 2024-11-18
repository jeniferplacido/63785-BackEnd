const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.use((req, res, next) => {
    if(req.session.user){
        res.locals.user = req.session.user;
    }
    next();
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try{
        const {email, senha} = req.body;
        const user = await User.findOne({email});
        if(user){
            req.session.user = user;
            return res.redirect('/perfil');
        } else{
            res.status(401).send('Usuario não encontrado');   
        }

    }catch(error){
        console.error('Erro ao logar usuário', error);
        res.status(500).send('Erro ao logar usuário');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err){
            res.send('Logout efetuado com sucesso!');
        }else{
            res.send({status: 'Erro no logout', body: err});
        }
    });
});

module.exports = router;