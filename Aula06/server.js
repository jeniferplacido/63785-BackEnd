// Importa o módulo 'http', que é um módulo integrado do Node, usado para
// criar servidores web
const http = require('http');

// Cria um servidor web
const server = http.createServer((request, response) => {
    //Envia a resposta HTTP com o texto My First Hello Word from the backend! Hello COders
    response.end('My First Hello Word from the backend! Hello Coders')
})
// Iniciar o meu servidor na porta 8080
server.listen(8080, ()=>{
    console.log('Servidor rodando na porta 8080!') // Imprimir uma mensagem no console 
})
   