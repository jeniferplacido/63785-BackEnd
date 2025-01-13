const OrderDao = require('../dao/order.dao');
const getOrders = async(req, res) =>{
    try{
        const orders = await OrderDao.getOrders();
        res.status(200).send({status:"sucess", result: orders});
    }catch(error){
        res.status(400).send({status:"error", result: error.message});
    }
}

const getOrdersById = async(req, res) =>{
    try{
        const order = await OrderDao.getOrdersById(req.params.oid);
        if(order){
            res.status(200).send({status:"sucess", result: order});
        }else{
            res.status(404).send({status:"error", result: "Order not found"});
        }
    }catch(error){
        res.status(400).send({status:"error", result: error.message});
    }
}

const createOrders = async(req, res) =>{
    try{
        const {userId, businessId, produtos} = req.body;

        const numeroOrdem = 'ORD-'+ Date.now();

        const order = await OrderDao.createOrder(
            {
                userId, 
                businessId, 
                produtos, 
                numeroOrdem
            });
            res.status(201).send({status:"sucess", result: order});
    }catch(error){
    res.status(400).send({status:"error", result: error.message});
}
}

const resolveOrders = async(req, res) =>{
    
    try{
        const order = await OrderDao.resolveOrder(req.params.oid);
        if(order){
            res.status(200).send({status:"sucess", result: order});
        }else{
            res.status(404).send({status:"error", result: "Order not found"});
        }
    }catch(error){
        res.status(400).send({status:"error", result: error.message});
    }
}

module.exports = {getOrders, getOrdersById, createOrders, resolveOrders}