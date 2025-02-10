const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/generate-test-users', async (req, res) => {
  try {
    const users = [
      { name: 'Teste 1', email: 'test1@example.com', password: '123456' },
      { name: 'Teste 2', email: 'test2@example.com', password: '123456' },
      { name: 'Teste 3', email: 'test3@example.com', password: '123456' },
    ];

    await User.insertMany(users);
    res.status(201).send('Usuários de teste criados com sucesso');
  } catch (err) {
    res.status(400).send('Erro ao criar usuários de teste: ' + err.message);
  }
});

module.exports = router;