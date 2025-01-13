const mongoose = require('mongoose');


const usersModel = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
    },
    orders:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Orders'
    }
    ]
})

const UsersModel = mongoose.model("Users",usersModel);

module.exports = UsersModel;