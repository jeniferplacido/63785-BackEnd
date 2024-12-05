const express = require('express');
const petRouter = require('./routes/pet.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pets', petRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})