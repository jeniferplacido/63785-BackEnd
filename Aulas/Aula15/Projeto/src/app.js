// Importa o módulo express para criar um servidor web
const express = require('express');
// Importa o módulo express-handlebars para usar Handlebars como mecanismo de visualização
const handlebars = require('express-handlebars');
// Importa o módulo de conexão com o banco de dados
const db = require('./utils/db');
// Importa o roteador de visualizações definido em outro arquivo
const viewsRouter = require('./routes/view.router');

// Cria uma instância do aplicativo express
const app = express();

// Configura o mecanismo de visualização Handlebars com opções personalizadas
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', // Define o layout padrão como 'main'
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, // Permite o acesso às propriedades diretamente
        allowProtoMethodsByDefault: true     // Permite o acesso a métodos diretamente (opcional)
    }
}));

// Define o mecanismo de visualização padrão como Handlebars
app.set('view engine', 'handlebars');

// Configura o middleware para analisar dados JSON no corpo das requisições
app.use(express.json());
// Configura o middleware para analisar dados URL-encoded no corpo das requisições
app.use(express.urlencoded({ extended: true }));
// Configura o middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Define a rota base para o roteador de visualizações
app.use('/', viewsRouter);

// Inicia o servidor na porta 8081 e exibe uma mensagem no console
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});