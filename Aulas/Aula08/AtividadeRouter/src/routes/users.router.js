
const express = require('express');


const router = express.Router();


let users = [];


router.get('/', (req, res) => {
    res.json(users);
    console.log('Usuarios: ', users);
});


router.post('/', (req, res) => {
    try{
        const novoUsuario = req.body;

        users.push(novoUsuario);
        console.log('Novo usuário adicionado: ', novoUsuario);
        res.status(201).json(novoUsuario);
    }catch(error){
        res.status(500).json({error: "Erro ao adicionar o usuário"});
    }
});

module.exports = router;