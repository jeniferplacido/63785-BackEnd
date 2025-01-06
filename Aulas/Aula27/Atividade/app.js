const express = require('express');

const app = express();


app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Olá, mundo!');
})

app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});