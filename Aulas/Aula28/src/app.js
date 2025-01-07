const express = require('express');
const productRouter = require('./routes/ProductRouter');
const app = express();

app.use(express.json());

app.use('/products', productRouter);


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});