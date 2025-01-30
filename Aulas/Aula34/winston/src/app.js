const express = require('express');
const addLogger = require('./utils/logger');
const app = express();

app.use(addLogger);

app.get('/teste', (req, res)=>{
    req.logger.warn('Alerta!')
    res.send({message: 'Teste de logger'});
})




app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});