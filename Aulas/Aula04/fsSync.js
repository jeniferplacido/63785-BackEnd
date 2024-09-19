// Importa o módulo fs (file system) para manipulação de arquivos
const fs = require('fs');

// Escreve o texto 'Hello, Coders, estou em um arquivo' no arquivo teste.txt de forma síncrona
fs.writeFileSync('./teste.txt', 'Hello, Coders, estou em um arquivo');

// Verifica se o arquivo teste.txt existe
if(fs.existsSync('teste.txt')) {
    // Lê o conteúdo do arquivo teste.txt de forma síncrona
    let conteudo = fs.readFileSync('teste.txt', 'utf-8');
    // Exibe o conteúdo do arquivo no console
    console.log(conteudo);
    
    // Adiciona o texto ' e estou adicionando mais conteudo' ao arquivo teste.txt de forma síncrona
    fs.appendFileSync('teste.txt', ' e estou adicionando mais conteudo');
    
    // Lê novamente o conteúdo do arquivo teste.txt de forma síncrona
    conteudo = fs.readFileSync('teste.txt', 'utf-8');
    // Exibe o conteúdo atualizado do arquivo no console
    console.log(conteudo);
    
    // Deleta o arquivo teste.txt de forma síncrona
    //fs.unlinkSync('teste.txt');
}