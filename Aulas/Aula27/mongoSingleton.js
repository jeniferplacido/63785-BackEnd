const mongoose = require('mongoose');

class MongoSingleton{
    static #instance;

    constructor(){
        this.url = 'mongodb+srv://ecom:ecom@ecom.xl434.mongodb.net/';
    }

    static getInstance(){
        if(this.#instance){
            console.log('Já existe uma instância de conexão com o MongoDB');
            return this.#instance;
        }

        this.#instance = new MongoSingleton();
        console.log('Instância de conexão com o MongoDB criada e conectada com sucesso!');
        return this.#instance;

    }
}

module.exports = MongoSingleton;