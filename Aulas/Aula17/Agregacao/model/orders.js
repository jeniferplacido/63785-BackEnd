const mongoose = require('mongoose');
const { type } = require('os');

const orderCollection = 'orders';

const orderSchema = new mongoose.Schema({
    nome: String,
    tamanho:{
        type: String,
        enum:['pequena', 'média', 'grande'],
        default: 'média'
    },
    preco: Number,
    quantidade: Number,
    data: Date
})


const orderModel = mongoose.model(orderCollection, orderSchema);

module.exports = orderModel;