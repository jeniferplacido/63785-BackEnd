const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/create-user', (req, res) => {
  res.render('user');
});

router.post('/create-user', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send('Usuário criado com sucesso');
  } catch (err) {
    res.status(400).send('Erro ao criar usuário: ' + err.message);
  }
});

module.exports = router;