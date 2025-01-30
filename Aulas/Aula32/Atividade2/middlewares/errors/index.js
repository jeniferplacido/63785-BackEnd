const Eerrors = require('../../services/enum');

module.exports = (error, req, res, next) => {

    if(error.cause){
        console.log(error.cause);
    }else{
        console.log(error);
    }

    switch (error.code) {
        case Eerrors.INVALID_TYPE:
            res.status(400).send({status: "erro", error: "Um ou mais campos obrigatórios não foram preenchidos"});
            break;
        
        case Eerrors.INVALID_PARAMETER:
            res.status(400).send({status: "erro", error: "Um ou mais campos estão com valores inválidos"});
            break;
        default:
            res.status(500).send({status: "erro", payload: "Erro interno do servidor"});
    }
}