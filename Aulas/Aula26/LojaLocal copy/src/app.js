const express = require('express');
const rotasUsuarios = require('./routes/usuario.router');
const rotasBrinquedos = require('./routes/brinquedo.router');

const app = express();



app.use(express.json());

// Uso das rotas
app.use('/api/usuarios', rotasUsuarios);      // Rotas para usuários
app.use('/api/brinquedos', rotasBrinquedos);  // Rotas para brinquedos

// Inicialização do servidor
app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
