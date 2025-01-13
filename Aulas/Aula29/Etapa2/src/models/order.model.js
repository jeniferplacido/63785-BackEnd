const monsgoose = require('mongoose');
const { type } = require('os');

const collection = "Orders";

const produtosOrdersModel = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    quantidade:{
        type: Number,
        required: true
    }
})

const OrdersModel = new mongooseSchema({
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
   produtos: [pedidosOrdersModel],
})

const Order = mongoose.model(OrdersModel, collection, produtosOrdersModel);

module.exports = Order;