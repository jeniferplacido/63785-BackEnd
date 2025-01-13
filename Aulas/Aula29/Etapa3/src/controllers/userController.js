const UserDao = require("../dao/user.dao");

const getUsers = async(req, res) =>{
    try{
        const users = await UserDao.getUsers();
        res.send({status:"sucess", result: users});
    }catch(error){
        res.status(500).send({status:"error", result: error.message});
    }
}

const getUserById = async(req, res) =>{
   const {id} = req.params;
   try{
    const user = await UserDao.getUserById(id);
    if(user){
        res.send({status:"sucess", result: user});
    }else{
        res.status(404).send({status:"error", result: "User not found"});
   }
}catch(error){
    res.status(500).send({status:"error", result: error.message});
}
}

const saveUser = async(req, res) =>{
    const user = req.body;
    try{
        const newUser = await UserDao.saveUser(user);
        res.send({status:"sucess", result: newUser});
    }catch(error){
        res.status(400).send({status:"error", result: error.message});
    }
}


module.exports = {getUsers, getUserById, saveUser};