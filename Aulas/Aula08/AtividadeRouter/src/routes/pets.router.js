const express = require('express');

const router = express.Router();


let pets = [];


router.get('/', (req, res) => {
    res.json(pets);
    console.log('Pets: ', pets);
});


router.post('/', (req, res) => {
    try{
        const novoPet = req.body;

        pets.push(novoPet);
        console.log('Novo pet adicionado: ', novoPet);
        res.status(201).json(novoPet);
    }catch(error){
        res.status(500).json({error: "Erro ao adicionar o pet"});
    }
});


module.exports = router;