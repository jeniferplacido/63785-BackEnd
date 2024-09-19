// Importa o módulo fs (file system) para manipulação de arquivos
const fs = require('fs');

// Define uma função assíncrona chamada operacoesAssincronas
const operacoesAssincronas = async() => {
    // Usa fs.promises.writeFile para escrever o texto 'Hello, Coders, Saudações da Promessa' no arquivo exemploPromises.txt
    await fs.promises.writeFile('./exemploPromises.txt', 'Hello, Coders, Saudações da Promessa');

    // Usa fs.promises.readFile para ler o conteúdo do arquivo exemploPromises.txt
    let resultado = await fs.promises.readFile('./exemploPromises.txt', 'utf-8');
    // Exibe o conteúdo do arquivo no console
    console.log(resultado);

    // Usa fs.promises.appendFile para adicionar o texto ' e estou adicionando mais conteudo' ao arquivo exemploPromises.txt
    await fs.promises.appendFile('./exemploPromises.txt', ' e estou adicionando mais conteudo');

    // Lê novamente o conteúdo do arquivo exemploPromises.txt
    resultado = await fs.promises.readFile('./exemploPromises.txt', 'utf-8');
    // Exibe o conteúdo atualizado do arquivo no console
    console.log(resultado);

    // Usa fs.promises.unlink para deletar o arquivo exemploPromises.txt (comentado)
    // await fs.promises.unlink('./exemploPromises.txt');
};

// Chama a função operacoesAssincronas
operacoesAssincronas();