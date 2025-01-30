const Router = require('express').Router;

const CustomError = require('../services/CustomError');

const Eerrors = require('../services/enum');

const generateUserErrorInfo = require('../services/info');



const users = [];

const router = Router();

router.get('/', (req, res) => {
    res.send({status: "sucesso", payload: users});
});


router.post('/', (req, res) => {
    const {name, lastName, email} = req.body;

    if(!name || !lastName || !email){
        const error = CustomError.createError({
            name: "Erro criação de usuário",
            cause: generateUserErrorInfo(name, lastName, email),
            message: "Um ou mais campos obrigatórios não foram preenchidos",
            code: Eerrors.INVALID_TYPE
        })
        return next(error);
    }


    const user ={
        name,
        lastName,
        email
    }

    if(users.length === 0){
        users.id=1;
    }else{
        users.id = users[users.length - 1].id + 1;
    }

    users.push(user);
    res.send({status: "sucesso", payload: users, id: user.id});
})

module.exports = router;