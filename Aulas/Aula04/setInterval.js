// Define uma função chamada contador
let contador = () => {
    // Inicializa a variável couter com o valor 1
    let couter = 1;
    // Exibe uma mensagem no console
    console.log('Executando o programa');
    // Define um temporizador que executa uma função a cada 1000 milissegundos (1 segundo)
    let timer = setInterval(() => {
        // Verifica se couter é menor ou igual a 10
        if (couter <= 10) {
            // Exibe o valor de couter no console
            console.log(couter);
            // Incrementa o valor de couter
            couter++;
        } else {
            // Limpa o temporizador quando couter é maior que 10
            clearInterval(timer);
        }
    }, 1000); // Intervalo de 1000 milissegundos (1 segundo)
}

// Exibe uma mensagem no console
console.log('Iniciando o programa');
// Chama a função contador
contador();
// Exibe uma mensagem no console
console.log('Finalizando o programa');