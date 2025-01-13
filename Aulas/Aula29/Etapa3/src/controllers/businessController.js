const BusinessDao = require('../dao/business.dao');

const getBusiness = async(req, res) =>{
    try{
        const business = await BussinesDao.getBusiness();
        res.send({status:"sucess", result: business});
    }catch(error){
        res.status(500).send({status:"error", result: error.message});
    }
}

const getBusinessById = async(req, res) =>{
   const {bid} = req.params;
   try{
    const business = await BusinessDao.getBusinessById(bid);
    if(business){
        res.send({status:"sucess", result: business});
    }else{
        res.status(404).send({status:"error", result: "Business not found"});
   }
    }catch(error){
    res.status(500).send({status:"error", result: error.message});
    }
}

const createBusiness = async(req, res) =>{
    const {nome, produtos} = req.body;
    try{
        const newBusiness = await BusinessDao.createBusiness({nome, produtos});
        res.send({status:"sucess", result: newBusiness});
    }catch(error){
        res.status(500).send({status:"error", result: error.message});
        
    }
}


const addProduct = async(req, res) =>{
    
}

module.exports = {getBusiness, getBusinessById, createBusiness, addProduct}; 