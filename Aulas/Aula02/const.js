const x = 0;

x = 10; // Erro! x é uma constante e não pode ser redefinida

const user = 'Juan';

user = 'Manolo'; // Erro! user é uma constante e não pode ser redefinida

const usuario = {nome: 'Juan', idade: 33};
usuario.nome = 'Manolo'; // Ok! O valor de uma constante pode ser alterado

const naoPodeserMudado = {'Juan': 33}; // Erro! const é uma palavra-chave e não pode ser redefinida

naoPodeserMudado = 100; // Erro! const é uma palavra-chave e não pode ser redefinida