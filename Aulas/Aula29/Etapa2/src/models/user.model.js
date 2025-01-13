const mongoose = require('mongoose');

const collection = "Users";

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

constUsersModel = mongoose.model(usersModel, collection);

module.exports = UsersModel;