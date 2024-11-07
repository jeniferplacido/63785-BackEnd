const mongoose = require('mongoose');

const orderModel = require('./model/orders');

const environment = async () => {
    try{
        await mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
        console.log('Conectado ao MongoDB com sucesso')
        // let result = await orderModel.insertMany([
        //     {
        //         nome: 'Pizza de Calabresa',
        //         tamanho: 'grande',
        //         preco: 50,
        //         quantidade: 2,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Frango',
        //         tamanho: 'média',
        //         preco: 40,
        //         quantidade: 1,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Marguerita',
        //         tamanho: 'pequena',
        //         preco: 30,
        //         quantidade: 3,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Portuguesa',
        //         tamanho: 'grande',
        //         preco: 60,
        //         quantidade: 1,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Chocolate',
        //         tamanho: 'média',
        //         preco: 45,
        //         quantidade: 2,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Banana',
        //         tamanho: 'pequena',
        //         preco: 35,
        //         quantidade: 4,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Morango',
        //         tamanho: 'grande',
        //         preco: 55,
        //         quantidade: 3,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Abacaxi',
        //         tamanho: 'média',
        //         preco: 42,
        //         quantidade: 2,
        //         data: new Date()
        //     },
        //     {
        //         nome: 'Pizza de Maçã',
        //         tamanho: 'pequena',
        //         preco: 32,
        //         quantidade: 1,
        //         data: new Date()
        //     }
        // ]);
        // console.log('Pizzas inseridas com sucesso: ', result);
        let result = await orderModel.find();
        console.log('Dados no banco:', result)
        let orders = await orderModel.aggregate([
            {
                $match:{tamanho: 'média'}
            },
            {
                $group:{_id:'$nome', quantidadeTotal:{$sum:'$quantidade'}}
            },
            // {
            //     $sort:{quantidadeTotal: -1}
            // },
            // {
            //     $group:{_id: 1, orders:{$push: '$$ROOT'}}
            // },
            // {
            //     $project:{
            //         '_id': 0,
            //         orders: '$orders'
            //     }
            //  },
            // {
            //     $merge:{ into: 'reports'}
            // }
        ])
        console.log('Resultado:', orders)
    }catch(err){
        console.error('Erro ao conectar ao MongoDB: ', err)
    }
}

environment();