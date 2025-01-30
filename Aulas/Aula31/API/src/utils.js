const  {faker}  = require('@faker-js/faker');


faker.locale = 'pt_BR'; 

const generateRandonNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProduct = () => {
    return {
        descricao: faker.commerce.productDescription(), 
        preco: faker.commerce.price(), 
        nome: faker.commerce.productName(), 
    };
};

const generateUser = () => {
    let numOfProducts = generateRandonNumber(1, 10);
    let products = [];

    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        nome: faker.person.firstName(), 
        sobrenome: faker.person.lastName(), 
        email: faker.internet.email(), 
        telefone: faker.phone.number(), 
        produtos: products, 
    };
};

module.exports = { generateProduct, generateUser };
