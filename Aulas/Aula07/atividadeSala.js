// Importa o módulo express para criar um servidor web
const express = require('express');
// Cria uma instância do aplicativo express
const app = express();

// Define uma variável frase com um valor inicial
let frase = "Frase inicial";

// Configura o middleware para analisar dados JSON no corpo das requisições
app.use(express.json());

// Define uma rota GET para o caminho '/api/frase'
app.get('/api/frase', (req, res) => {
    // Envia a frase atual como resposta em formato JSON
    res.json({ frase });
});

// Define uma rota GET para o caminho '/api/palavras/:pos', onde :pos é um parâmetro de rota
app.get('/api/palavras/:pos', (req, res) => {
    // Converte o valor do parâmetro pos para um número inteiro
    let pos = parseInt(req.params.pos);
    // Divide a frase em palavras e armazena no array palavras
    let palavras = frase.split(" ");
    // Obtém a palavra na posição especificada (ajustada para índice zero) ou null se não existir
    let palavra = palavras[pos - 1] || null;
    // Envia a palavra encontrada como resposta em formato JSON
    res.json({ busca: palavra });
});

// Define uma rota POST para o caminho '/api/palavras'
app.post('/api/palavras', (req, res) => {
    // Obtém a palavra do corpo da requisição
    let palavra = req.body.palavra;
    // Adiciona a nova palavra à frase
    frase += " " + palavra;
    // Envia a palavra adicionada e a nova posição como resposta em formato JSON
    res.json({ adicionado: palavra, pos: frase.split(" ").length });
});

// Define uma rota PUT para o caminho '/api/palavras/:pos', onde :pos é um parâmetro de rota
app.put('/api/palavras/:pos', (req, res) => {
    // Converte o valor do parâmetro pos para um número inteiro
    let pos = parseInt(req.params.pos);
    // Obtém a nova palavra do corpo da requisição
    let palavra = req.body.palavra;
    // Divide a frase em palavras e armazena no array palavras
    let palavras = frase.split(" ");
    // Obtém a palavra anterior na posição especificada (ajustada para índice zero) ou null se não existir
    let anterior = palavras[pos - 1] || null;
    // Atualiza a palavra na posição especificada
    palavras[pos - 1] = palavra;
    // Junta as palavras de volta em uma frase
    frase = palavras.join(" ");
    // Envia a palavra atualizada e a palavra anterior como resposta em formato JSON
    res.json({ atualizado: palavra, anterior });
});

// Define uma rota DELETE para o caminho '/api/palavras/:pos', onde :pos é um parâmetro de rota
app.delete('/api/palavras/:pos', (req, res) => {
    // Converte o valor do parâmetro pos para um número inteiro
    let pos = parseInt(req.params.pos);
    // Divide a frase em palavras e armazena no array palavras
    let palavras = frase.split(" ");
    // Remove a palavra na posição especificada (ajustada para índice zero) e armazena a palavra removida
    let removida = palavras.splice(pos - 1, 1);
    // Junta as palavras restantes de volta em uma frase
    frase = palavras.join(" ");
    // Envia a palavra removida como resposta em formato JSON
    res.json({ removida: removida[0] });
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080.`);
});