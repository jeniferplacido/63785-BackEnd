const express = require('express');
const router = express.Router();
const { generateUser } = require('../utils');

router.get('/', (req, res) => { // Não é mais necessário o async aqui
    let users = [];
    for (let i = 0; i < 100; i++) {
        users.push(generateUser()); // Remover o await
    }
    res.send({ status: 'sucesso', payload: users });
    console.log('Usuários gerados com sucesso!', users);
});

module.exports = router;
