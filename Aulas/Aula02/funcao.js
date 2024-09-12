var anosDeEstudo = 10 // global
function experiencia(anos){
    let idade = 25 // local
    if(anos <= 1){
        return 'Iniciante'
} else if(anos <= 3){
    return 'Intermediário'
} else if(anos <= 6){
    return 'Avançado'
} else {
    return 'Jedi Master'
}
}
console.log(experiencia(anosDeEstudo))

function somar (a, b){
    let resultado = a + b
    return resultado
}

let resultadoSoma = somar(3, 5)
console.log("O resultado da função somar é:", resultadoSoma)

let soma = (a, b) => {
    let resultado = a + b
    return resultado
}
let resultadoSoma2 = soma(3, 6)
console.log("O resultado da função soma é:", resultadoSoma2)


// Exemplo de exponencial

let base = 2
let expoente = 3

let resultado = base ** expoente

console.log('O resultado da exponencial é:', resultado) //8

// Exemplo de includes

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numero = 5
if (lista.includes(numero)){
    console.log(`O número ${numero} está na lista`)
}else{
    console.log(`O número ${numero} não está na lista`)
}

// Async Await

function esperar(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function exemploAsync(){
    console.log('Iniciando função assincrona...')

    await esperar(2000)
    console.log('Executando a função assincrona...')

    await esperar(5000)
    console.log('Finalizando a função assincrona...')
}

exemploAsync()