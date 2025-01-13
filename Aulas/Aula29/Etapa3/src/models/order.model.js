const mongoose = require('mongoose');

const OrdersModel = new mongoose.Schema({
   numeroOrdem:{
    type: String,
    required: true,
    unique: true
   },
   business:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true
   },
   user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Users',
         required: true
   },
   produtos: [{
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
   }],
})

const Order = mongoose.model("Orders", OrdersModel);

module.exports = Order;