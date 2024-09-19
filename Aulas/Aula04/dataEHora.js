// Importa o módulo fs (file system) para manipulação de arquivos
const fs = require('fs');

// Obtém a data e hora atual no formato local e armazena na variável dataAtual
const dataAtual = new Date().toLocaleString();

// Exibe a data e hora atual no console
console.log(dataAtual);

// Escreve a data e hora atual no arquivo dataEHora.txt
fs.writeFile('./dataEHora.txt', dataAtual, (err) => {
    // Verifica se ocorreu um erro ao criar o arquivo
    if(err){
        // Exibe uma mensagem de erro no console
        console.error('Erro ao criar arquivo', err);
        return; // Encerra a execução da função em caso de erro
    }

    // Exibe uma mensagem de sucesso no console
    console.log('Arquivo criado com sucesso');

    // Lê o conteúdo do arquivo dataEHora.txt
    fs.readFile('./dataEHora.txt', 'utf-8', (err, data) => {
        // Verifica se ocorreu um erro ao ler o arquivo
        if(err){
            // Exibe uma mensagem de erro no console
            console.error('Erro ao ler arquivo', err);
            return; // Encerra a execução da função em caso de erro
        }
        // Exibe o conteúdo do arquivo no console
        console.log(data);
    
        // Exibe uma mensagem adicional no console
        console.log('Este é o conteúdo que tem dentro do arquivo');
        // Exibe novamente o conteúdo do arquivo no console
        console.log(data);
    });
});
