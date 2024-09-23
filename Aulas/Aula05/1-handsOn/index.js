// GERAR UM NUM ALEATÓRIO 1 A 20
// 10000 numeros aleatórios
// cria um objeto

const geraNumAleatorio = () => {
  const numero = Math.floor(Math.random() * 20) + 1;
  // console.log(numero);  
  return numero
};

const geraLista = (num) => {
  const array = new Array(num);
  for (let index = 0; index < array.length; index = index+1) {
    array[index] = geraNumAleatorio()
  };
  return array;
}

const contagemNumeros = (lista) => {
  const contaNumero = {};
  lista.forEach(element => {
    // console.log(element, contaNumero[element]);
    if (!contaNumero[element]) {
      contaNumero[element] = 1;
    } else {
      contaNumero[element] +=1 // contaNumero[element] = contaNumero[element] +1
    }
  });
  return contaNumero;
}

const main = () => {
  const lista = geraLista(10);
  console.log(lista);
  const contagem = contagemNumeros(lista);
  console.log(contagem);
}

main();