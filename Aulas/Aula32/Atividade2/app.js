const express = require('express');
const UserRouter = require('./routes/user');

const errorHandler = require('./middlewares/errors/index');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/users', UserRouter);
app.use(errorHandler);

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});