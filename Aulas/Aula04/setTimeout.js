// Define uma função chamada temporizador que recebe uma função de callback como argumento
const temporizador = (callback) => {
    // Define um temporizador que executa a função de callback após 5000 milissegundos (5 segundos)
    setTimeout(() => {
        callback()  
    }, 5000);
}

// Define uma função chamada operacao
let operacao = () => {
    // Exibe uma mensagem no console
    console.log('Executando operação');
}

// Exibe uma mensagem no console
console.log('Iniciando o programa');

// Chama a função temporizador passando a função operacao como argumento
temporizador(operacao);

// Exibe uma mensagem no console
console.log('Continuando o programa');
// Exibe uma mensagem no console
console.log('Finalizando o programa');