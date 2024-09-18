// Define a função encontrarChave que retorna uma Promise
function encontrarChave(){
    return new Promise((resolve)=>{
        // Simula uma operação assíncrona usando setTimeout
        setTimeout(function(){
            // Exibe uma mensagem no console
            console.log('Encontrando a chave...')
            // Exibe outra mensagem no console
            console.log('Chave encontrada')
            // Resolve a Promise
            resolve();
        }, 2500); // Atraso de 2500 milissegundos (2,5 segundos)
    })
}

// Define a função construirPonte que retorna uma Promise
function construirPonte(){
    return new Promise((resolve)=>{
        // Simula uma operação assíncrona usando setTimeout
        setTimeout(function(){
            // Exibe uma mensagem no console
            console.log('Construindo a ponte...')
            // Exibe outra mensagem no console
            console.log('Ponte construída')
            // Resolve a Promise
            resolve();
        }, 3500); // Atraso de 3500 milissegundos (3,5 segundos)
    })
}

// Define a função escalarMontanha que retorna uma Promise
function escalarMontanha(){
    return new Promise((resolve)=>{
        // Simula uma operação assíncrona usando setTimeout
        setTimeout(function(){
            // Exibe uma mensagem no console
            console.log('Escalando a montanha...')
            // Resolve a Promise
            resolve();
        }, 2500); // Atraso de 2500 milissegundos (2,5 segundos)
    })
}

// Define a função encontrarTesouro que retorna uma Promise
function encontrarTesouro(){
    return new Promise((resolve)=>{
        // Simula uma operação assíncrona usando setTimeout
        setTimeout(function(){
            // Exibe uma mensagem no console
            console.log('Encontrando o tesouro...')
            // Exibe outra mensagem no console
            console.log('Parabéns, Tesouro encontrado')
            // Resolve a Promise
            resolve();
        }, 2500); // Atraso de 2500 milissegundos (2,5 segundos)
    })
}

// Chama encontrarChave e encadeia as chamadas das outras funções usando then
encontrarChave()
.then(()=> construirPonte()) // Após encontrar a chave, chama construirPonte
.then(()=> escalarMontanha()) // Após construir a ponte, chama escalarMontanha
.then(()=> encontrarTesouro()) // Após escalar a montanha, chama encontrarTesouro
.catch((error)=> console.log('Erro: ', error)) // Captura e exibe qualquer erro que ocorrer