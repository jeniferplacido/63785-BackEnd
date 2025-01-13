const express = require('express');

const connection = require('../src/config/db');

const app = express();

app.use(express.json());

const userRouter = require('./routes/user.router');
const businessRouter = require('./routes/business.router');
const orderRouter = require('./routes/orders.router');

connection();

app.use('/users', userRouter);
app.use('/business', businessRouter);
app.use('/orders', orderRouter);


app.listen(8080, () => {
    console.log(`SERVIDOR RODANDO NA PORTA 8080`);
})
