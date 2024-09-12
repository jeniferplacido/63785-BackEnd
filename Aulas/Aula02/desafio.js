// Um array de objetos contendo produtos e suas quantidades vendidas foi fornecido.
const objetos = [
    {macas: 3, peras: 2, carne: 1, frango: 5, doces: 2},  // primeiro objeto com produtos e quantidade
    {macas: 1, cafes: 1, ovos: 6, frango: 1, paes: 4} // segundo objeto com produtos e quantidade
]

// Criando uma lista vazia que irá armazenar todos os tipos de produtos
const tiposProdutos = []

// Percorrendo o array de objetos
for (const objeto of objetos){
    // Obter as chaves (nomes dos produtos) do objeto atual
    const chaves = Object.keys(objeto)

    // Percorrendo as chaves do objeto atual
    for (const chave of chaves){
        // Verificando se o tipo de produto já esta na lista 'tiposProdutos'
        if (!tiposProdutos.includes(chave)){
            // Se o produto não estiver na minha lista, adiconá-lo
            tiposProdutos.push(chave)
        }

    }
}
// Mostrar o array com todos os tipos de produtos únicos no console
console.log(tiposProdutos) 

// Criando uma variável para armazenar o total de vendas
let totalVendido = 0;

// Iterar sobre cada objeto no array de objetos novamente
for (const objeto of objetos){

    // obter os valores (quantidades vendidas) do objeto atual
    const valores = Object.values(objeto);

    // Percorrer os valores do objeto atual
    for ( const valor of valores){
       // Somar o valor atual á variável "totalVendido" 
        totalVendido += valor
    }
}

console.log( "Total de vendas é: " + totalVendido) // Mostrar o total de vendas no console