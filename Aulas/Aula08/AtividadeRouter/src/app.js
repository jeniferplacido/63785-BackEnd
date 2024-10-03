const express = require('express');

const app = express();


const petsRouter = require('./routes/pets.router');
const usersRouter = require('./routes/users.router');


app.use(express.json());


app.use('/api/pets', petsRouter);
app.use('/api/users', usersRouter);



app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})
