const cluster = require ('cluster');
const os = require ('os');
const express = require('express');


const app = express();

const numeroDeProcessadores = os.cpus().length;

console.log(`Processadores disponíveis: ${numeroDeProcessadores}`);

if(cluster.isPrimary){
    console.log('Processo primário, gerando processo trabalhador');
    for(let i = 0; i < numeroDeProcessadores; i++){
    cluster.fork();
    }
}else{
    console.log('Ao ser um processo criado a partir de um fork não conto como primário, então isPrimary= false. Então eu sou um worker!')
    console.log(`Me apresento pois eu sou um processo de número:${process.pid} ` );
}
app.get('/', (req, res) => {
    res.send({status: "sucesso", message: "Requisição atendida por um worker!"})
})



app.listen(8081, () => {
    console.log('Servidor rodando na porta 8080!')
})