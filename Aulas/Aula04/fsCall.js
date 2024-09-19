// Importa o módulo fs (file system) para manipulação de arquivos
const fs = require('fs');

// Escreve o texto 'Hello, Coders, Saudações do Callback' no arquivo exemploCallback.txt
fs.writeFile('./exemploCallback.txt', 'Hello, Coders, Saudações do Callback', (err) => {
    // Verifica se ocorreu um erro ao criar o arquivo
    if(err) return console.error('Erro ao criar arquivo');
    
    // Lê o conteúdo do arquivo exemploCallback.txt
    fs.readFile('./exemploCallback.txt', 'utf-8', (err, resultado) => {
        // Verifica se ocorreu um erro ao ler o arquivo
        if(err) return console.error('Erro ao ler arquivo');
        
        // Exibe o conteúdo do arquivo no console
        console.log(resultado);
        
        // Adiciona o texto ' e estou adicionando mais conteudo' ao arquivo exemploCallback.txt
        fs.appendFile('./exemploCallback.txt', ' e estou adicionando mais conteudo', (err) => {
            // Verifica se ocorreu um erro ao atualizar o conteúdo do arquivo
            if(err) return console.error('Erro ao atualizar o conteudo');
            
            // Lê novamente o conteúdo do arquivo exemploCallback.txt
            fs.readFile('./exemploCallback.txt', 'utf-8', (err, resultado) => {
                // Verifica se ocorreu um erro ao ler o arquivo
                if(err) return console.error('Erro ao ler arquivo');
                
                // Exibe o conteúdo atualizado do arquivo no console
                console.log(resultado);
                
                // Deleta o arquivo exemploCallback.txt
              //  fs.unlink('./exemploCallback.txt', (err) => {
                    // Verifica se ocorreu um erro ao deletar o arquivo
                 //   if(err) return console.error('Erro ao deletar arquivo');
               // });
            });
        });
    });
});