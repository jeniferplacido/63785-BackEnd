const mongoose = require('mongoose');


const businessModel = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    produtos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
    }
    })

const BusinessModel = mongoose.model("Business",businessModel);

module.exports = BusinessModel;