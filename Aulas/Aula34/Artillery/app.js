const express = require('express');


const app = express();

app.get('/simples', (req, res) => {
    let soma = 0;
    for (let i = 0; i < 100000; i++) {
        soma += i;
    }
    res.send({ soma });
});
  
app.get('/complexo', (req, res) => {
    let soma = 0;
    for (let i = 0; i < 5e8; i++) {
        soma += i;
    }
    res.send({ soma });
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});