const mongoose = require('mongoose');
const produtosOrdersModel = require('./order.model');

const collection = "Business";

const businessModel = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    produtos: [produtosOrdersModel]
    })

const BusinessModel = mongoose.model(businessModel, collection);

module.exports = BusinessModel;