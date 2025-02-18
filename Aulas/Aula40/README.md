# **Testes Unitários**

Testar com testes unitários oferece várias vantagens que contribuem para a qualidade, manutenção e robustez do código. Aqui estão algumas das principais vantagens:

### 1. **Confiança na Qualidade do Código**

- **Identificação Precoce de Erros**: Testes unitários permitem a identificação de problemas no código durante as fases iniciais do desenvolvimento, antes que se tornem grandes problemas.
- **Verificação de Funcionalidades Específicas**: Cada unidade de código é testada isoladamente, garantindo que cada função ou método funcione conforme o esperado.

### 2. **Facilidade de Manutenção**

- **Refatoração Segura**: Com uma suíte de testes unitários, os desenvolvedores podem refatorar o código com confiança, sabendo que os testes ajudarão a identificar quaisquer regressões introduzidas.
- **Documentação Viva**: Testes unitários servem como uma forma de documentação do comportamento esperado do código, facilitando a compreensão para novos desenvolvedores.

### 3. **Desenvolvimento Ágil**

- **Feedback Rápido**: Testes unitários fornecem feedback imediato sobre a integridade do código após cada mudança, permitindo um ciclo de desenvolvimento mais rápido e ágil.
- **Facilidade de Integração Contínua**: Eles são uma parte essencial das práticas de integração contínua, ajudando a garantir que novas alterações não quebrem o sistema existente.

### 4. **Custo Reduzido a Longo Prazo**

- **Menos Bugs em Produção**: Ao capturar erros antecipadamente, os testes unitários ajudam a reduzir o número de bugs que chegam ao ambiente de produção, economizando tempo e recursos.
- **Diagnóstico Rápido de Problemas**: Quando um teste falha, ele aponta exatamente onde está o problema, tornando o processo de diagnóstico e correção mais rápido.

### 5. **Qualidade do Código**

- **Design de Código Melhor**: Para escrever testes unitários eficazes, o código precisa ser modular e desacoplado, o que geralmente leva a um design de código mais limpo e bem estruturado.
- **Cobertura de Código**: Manter uma alta cobertura de testes unitários garante que a maior parte do código seja testada e verificada.

### 6. **Foco em Requisitos**

- **Validação de Requisitos**: Testes unitários ajudam a garantir que o código atenda aos requisitos especificados, validando que cada funcionalidade cumpre seu propósito.

### Exemplos e Ferramentas

- **Ferramentas**: Frameworks como JUnit (para Java), NUnit (para .NET), pytest (para Python), e Jest (para JavaScript) facilitam a criação e execução de testes unitários.
- **Integração**: A integração com sistemas de CI/CD como Jenkins, Travis CI, e GitHub Actions permite a execução automática dos testes em cada commit.

A prática de escrever e manter testes unitários é uma das melhores estratégias para garantir a qualidade e a confiabilidade do software, proporcionando benefícios significativos ao longo do ciclo de vida do desenvolvimento.

------

## Testes Unitários

Imagine que você tem uma fábrica de biscoitos. Na linha de produção, você quer ter certeza de que cada biscoito está perfeito antes de colocá-lo na embalagem. Para isso, você pode criar uma série de testes simples para verificar diferentes aspectos de cada biscoito: o sabor, o tamanho, a forma, e a textura. Esses testes garantem que cada biscoito individualmente está perfeito antes de seguir para a próxima etapa.

**Testes unitários em programação funcionam de forma semelhante**. Eles são pequenos testes que verificam se partes específicas do código (como funções ou métodos) funcionam corretamente. Aqui está uma explicação simples para entender o conceito:

### O Que é um Teste Unitário?

- **Unidade**: Pense em uma "unidade" como a menor parte do código que realiza uma tarefa específica, como uma função que calcula a soma de dois números.
- **Teste**: É um pequeno pedaço de código que verifica se essa unidade está funcionando corretamente.

### Por Que São Importantes?

- **Garantia de Qualidade**: Assim como testar cada biscoito garante que todos estão perfeitos, testar cada parte do código ajuda a garantir que o programa todo funcione corretamente.
- **Facilidade na Identificação de Problemas**: Se algo der errado, os testes unitários ajudam a descobrir exatamente onde está o problema.
- **Confiança para Mudanças**: Se você precisa modificar ou melhorar o código, os testes unitários ajudam a garantir que as mudanças não quebrem nada que estava funcionando antes.

### Como Funcionam na Prática?

Vamos imaginar um exemplo simples. Suponha que você tem uma função que adiciona dois números:

```javascript
function soma(a, b) {
  return a + b;
}
```

Para testar se essa função está funcionando corretamente, você pode escrever um teste unitário:

```javascript
function testeSoma() {
  const resultado = soma(2, 3);
  if (resultado === 5) {
    console.log("Teste passou!");
  } else {
    console.log("Teste falhou. Resultado esperado: 5, mas obteve: " + resultado);
  }
}

testeSoma();  // Isso deve imprimir "Teste passou!" se a função soma estiver correta.
```

### Benefícios de Testes Unitários

- **Rapidez**: Eles são rápidos de executar, proporcionando feedback imediato.
- **Segurança**: Garantem que pequenas partes do código funcionem corretamente, o que contribui para a estabilidade do sistema como um todo.
- **Documentação**: Ajudam a documentar o que cada parte do código deveria fazer, tornando mais fácil para outros desenvolvedores entenderem e trabalharem no projeto.

Assim como testar cada biscoito na linha de produção garante a qualidade do produto final, os testes unitários garantem que cada parte do código funcione corretamente, contribuindo para a qualidade e confiabilidade do software.

------

## **Mocha**

Mocha é um framework de testes para JavaScript, que permite escrever e executar testes de maneira organizada e eficiente. Ele é amplamente utilizado para realizar testes unitários, testes de integração, e até testes de ponta a ponta em aplicações JavaScript, tanto no backend (Node.js) quanto no frontend (navegador).

### O Que é Mocha?

- **Mocha**: É uma biblioteca de testes de código aberto para JavaScript que facilita a criação, organização e execução de testes.
- **BDD/TDD**: Suporta tanto Behavior Driven Development (BDD) quanto Test Driven Development (TDD), permitindo a escrita de testes de uma maneira descritiva e estruturada.

### Principais Recursos e Benefícios

- **Estruturação de Testes**: Mocha permite organizar os testes em grupos chamados "suites" (conjuntos de testes relacionados) e "testes" individuais.
- **Assíncrono**: Suporta testes assíncronos, essenciais para testar operações que envolvem chamadas de rede, temporizadores, ou outras operações assíncronas.
- **Hooks**: Fornece "hooks" (ganchos) como `before`, `after`, `beforeEach` e `afterEach` para configurar e limpar o ambiente de teste.
- **Relatórios**: Possui uma variedade de opções de relatórios, tornando os resultados dos testes mais fáceis de entender e analisar.
- **Extensível**: Pode ser facilmente integrado com outras bibliotecas, como Chai (para asserções) e Sinon (para mocks e spies), aumentando seu poder e flexibilidade.

### Como Usar Mocha

#### Instalação

Para começar a usar Mocha, você precisa instalá-lo como uma dependência de desenvolvimento no seu projeto:

```sh
npm install --save-dev mocha
```

#### Escrevendo um Teste Simples

Aqui está um exemplo básico de como escrever e executar um teste com Mocha:

1. **Crie um Arquivo de Teste**: Crie um arquivo chamado `test.js`.
2. **Escreva o Teste**:

```javascript
// test.js
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('deve retornar -1 quando o valor não está presente', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

- **describe**: Agrupa testes relacionados.
- **it**: Define um teste individual.
- **assert**: Uma biblioteca de asserção integrada no Node.js usada para verificar se os resultados do teste estão corretos.

#### Executando o Teste

Para executar os testes, adicione um script no seu `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

E então execute:

```sh
npm test
```

Mocha executará os testes definidos no arquivo `test.js` e exibirá os resultados no console.

Mocha é uma ferramenta poderosa e flexível para escrever testes automatizados em JavaScript. Ele ajuda a garantir que o código funcione conforme esperado, facilita a detecção de bugs, e torna o desenvolvimento mais confiável e seguro. Ao utilizar Mocha, juntamente com outras bibliotecas como Chai e Sinon, você pode criar uma suite de testes robusta e abrangente para suas aplicações JavaScript.

Quando se trabalha com Mocha, um framework de testes JavaScript, há uma série de termos e conceitos específicos que é importante conhecer. Esses termos ajudam a organizar e escrever testes de forma eficaz. Aqui está uma visão geral da terminologia de teste elementar em Mocha:

### Termos Fundamentais

#### Test Suite

- **`describe`**: Função usada para agrupar testes relacionados. Um test suite pode conter múltiplos testes (casos de teste) e outros subgrupos (`describe`).

  ```javascript
  describe('Nome do Grupo de Testes', function() {
    // Casos de teste e subgrupos
  });
  ```

#### Test Case

- **`it`**: Função usada para definir um caso de teste individual. Representa uma única unidade de trabalho a ser testada.

  ```javascript
  it('deve fazer algo', function() {
    // Código do teste
  });
  ```

#### Hooks

- **`before`**: Função que executa antes de todos os testes no bloco `describe`. Usada para configuração inicial.

  ```javascript
  before(function() {
    // Configuração inicial
  });
  ```

- **`after`**: Função que executa depois de todos os testes no bloco `describe`. Usada para limpeza.

  ```javascript
  after(function() {
    // Limpeza
  });
  ```

- **`beforeEach`**: Função que executa antes de cada caso de teste no bloco `describe`. Usada para preparar o ambiente de teste.

  ```javascript
  beforeEach(function() {
    // Preparação antes de cada teste
  });
  ```

- **`afterEach`**: Função que executa depois de cada caso de teste no bloco `describe`. Usada para limpar o estado após cada teste.

  ```javascript
  afterEach(function() {
    // Limpeza após cada teste
  });
  ```

### Termos Relacionados ao Código

#### Assertions

- **Assert (Asserção)**: Declaração que verifica se uma condição é verdadeira. Em Mocha, é comum usar bibliotecas de asserção como Chai para escrever asserções.

  ```javascript
  const chai = require('chai');
  const expect = chai.expect;
  
  it('deve retornar verdadeiro', function() {
    expect(true).to.be.true;
  });
  ```

#### Asynchronous Tests

- **Testes Assíncronos**: Testes que verificam código assíncrono. Mocha suporta testes assíncronos através do uso de callbacks, promessas, ou `async`/`await`.

  ```javascript
  // Usando callback
  it('deve completar a tarefa assíncrona', function(done) {
    setTimeout(function() {
      expect(true).to.be.true;
      done();
    }, 1000);
  });
  
  // Usando promessas
  it('deve completar a promessa', function() {
    return someAsyncFunction().then(function(result) {
      expect(result).to.equal(expectedValue);
    });
  });
  
  // Usando async/await
  it('deve completar a tarefa assíncrona com async/await', async function() {
    const result = await someAsyncFunction();
    expect(result).to.equal(expectedValue);
  });
  ```

### Estrutura e Organização

#### Nested Suites

- **Suites Aninhadas**: Você pode aninhar blocos `describe` para organizar melhor os testes.

  ```javascript
  describe('Grupo de Testes Pai', function() {
    describe('Subgrupo de Testes', function() {
      it('deve fazer algo', function() {
        // Código do teste
      });
    });
  });
  ```

### Outros Termos Importantes

- **Reporter**: Componente que exibe os resultados dos testes. Mocha oferece vários reportadores, como "spec", "dot", "nyan", entre outros.

  ```sh
  mocha --reporter spec
  ```

- **Timeout**: Tempo máximo que um teste pode levar para ser executado antes de falhar automaticamente. Pode ser definido globalmente ou por teste.

  ```javascript
  this.timeout(5000); // 5 segundos
  
  it('deve completar em menos de 5 segundos', function(done) {
    setTimeout(done, 3000); // Teste passará
  });
  ```

### Exemplo Completo

Aqui está um exemplo completo utilizando Mocha e Chai:

```javascript
const chai = require('chai');
const expect = chai.expect;

// Função a ser testada
function soma(a, b) {
  return a + b;
}

describe('Função Soma', function() {
  before(function() {
    // Executa antes de todos os testes
    console.log('Iniciando testes...');
  });

  after(function() {
    // Executa depois de todos os testes
    console.log('Finalizando testes...');
  });

  beforeEach(function() {
    // Executa antes de cada teste
    console.log('Preparando para o teste...');
  });

  afterEach(function() {
    // Executa depois de cada teste
    console.log('Limpeza após o teste...');
  });

  it('deve retornar 5 quando somar 2 e 3', function() {
    const resultado = soma(2, 3);
    expect(resultado).to.equal(5);
  });

  it('deve retornar um número negativo quando somar números negativos', function() {
    const resultado = soma(-2, -3);
    expect(resultado).to.equal(-5);
  });

  it('deve completar a tarefa assíncrona com async/await', async function() {
    const resultado = await new Promise(resolve => setTimeout(() => resolve(10), 1000));
    expect(resultado).to.equal(10);
  });
});
```

Este exemplo cobre a criação de uma suite de testes, casos de teste, uso de hooks e teste de código assíncrono, fornecendo uma base sólida para entender a terminologia de testes em Mocha.

### Complemento de Assertions: Chai

Chai é uma biblioteca de asserções para Node.js e navegadores que pode ser combinada com qualquer biblioteca de testes, como Mocha. Ela oferece uma maneira natural de escrever testes, utilizando uma linguagem mais expressiva e legível. Vamos explorar como usar Chai com Mocha, mantendo a simplicidade.

### O que é uma asserção?

Em testes de software, uma asserção é uma verificação que garante que uma parte do seu código está funcionando conforme o esperado. Por exemplo, você pode querer garantir que uma função retorna o valor correto ou que um objeto tem uma propriedade específica.

### Como Chai ajuda?

Chai permite que você escreva essas verificações de forma mais legível e intuitiva. Existem três estilos principais de asserções em Chai:

1. **Assert** (assertivo, estilo similar ao do Node.js)
2. **Expect** (mais descritivo, estilo mais natural)
3. **Should** (usando propriedades, estilo fluente)

### Exemplos práticos

Vamos ver como você pode usar Chai no contexto dos seus testes.

### Instalação do Chai

Primeiro, você precisa instalar o Chai. No seu terminal, execute:

```sh
npm install chai
```

### Uso do Chai nos testes

Vamos usar o estilo `expect` do Chai, que é fácil de entender e ler.

### Atualizando seus testes com Chai

```javascript
import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js"; // Certifique-se de que o caminho está correto
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const expect = chai.expect;

mongoose.connect('mongodb+srv://jeni:jeni@cluster0.5nyoc9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

describe('Testando usuarios DAO', function () {
    let usersDao;

    before(function () {
        usersDao = userModel;
    });

    beforeEach(async function () {
        this.timeout(10000);
        // Limpa a coleção de usuários antes de cada teste
        await userModel.deleteMany({});
    });

    it('Dao deve poder retornar os usuarios em um array', async function () {
        const result = await usersDao.find();
        console.log(result);
        expect(result).to.be.an('array');
    });

    it('Dao deve adicionar um usuário corretamente na base de dados', async function () {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'email@email.com',
            password: '1234'
        }
        const result = await usersDao.create(mockUser);
        expect(result).to.have.property('_id');
    });

    it('O Dao adicionará ao documento inserido uma matriz de pets vazia por padrão', async function () {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'email1@email.com',
            password: '1234'
        }
        const result = await usersDao.create(mockUser);
        expect(result).to.have.property('pets').that.is.an('array').that.is.empty;
    });

    it('O Dao pode obter um usuário pelo email', async function () {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'email2@email.com',
            password: '1234'
        }
        await usersDao.create(mockUser); // Adicione o usuário primeiro
        const result = await usersDao.getBy(mockUser.email);
        expect(result).to.have.property('email').that.equals(mockUser.email);
    });
});
```

### Explicação das Mudanças

1. **Importação do Chai**:
   - `import chai from "chai";`: Importa a biblioteca Chai.
   - `import chaiAsPromised from "chai-as-promised";`: Importa um plugin Chai para lidar com promessas.
   - `chai.use(chaiAsPromised);`: Adiciona o plugin Chai para promessas.
   - `const expect = chai.expect;`: Define `expect` como uma função para fazer asserções.

2. **Uso do Chai nos Testes**:
   - `expect(result).to.be.an('array');`: Verifica se o `result` é um array.
   - `expect(result).to.have.property('_id');`: Verifica se o `result` possui a propriedade `_id`.
   - `expect(result).to.have.property('pets').that.is.an('array').that.is.empty;`: Verifica se a propriedade `pets` é um array vazio.
   - `expect(result).to.have.property('email').that.equals(mockUser.email);`: Verifica se a propriedade `email` no `result` é igual ao email do `mockUser`.

### Benefícios do Chai

- **Legibilidade**: As asserções são escritas em uma linguagem natural que facilita a leitura e entendimento dos testes.
- **Flexibilidade**: Suporta vários estilos de asserção (assert, expect, should).
- **Extensível**: Pode ser expandido com plugins como `chai-as-promised` para trabalhar com promessas.

Usando Chai, seus testes se tornam mais intuitivos e fáceis de entender, o que é especialmente útil ao trabalhar em equipe ou ao retornar ao código após algum tempo.

### Partes das Cadeias de Linguagem do Chai

#### 1. `expect`

Este é o ponto de partida da cadeia. Você usa `expect` para declarar a variável ou o resultado que está testando.

```javascript
expect(result)
```

#### 2. `.to`

Essa parte não realiza nenhuma verificação, mas torna a leitura da cadeia mais fluida e natural.

```javascript
expect(result).to
```

#### 3. `.be` e `.have`

- **`.be`**: Usado para verificar o estado ou tipo da variável. É uma forma mais legível de escrever algumas verificações.

  ```javascript
  expect(result).to.be.a('string'); // Verifica se é uma string
  expect(result).to.be.true; // Verifica se é verdadeiro
  ```

- **`.have`**: Usado para verificar propriedades de objetos.

  ```javascript
  expect(result).to.have.property('name'); // Verifica se tem a propriedade 'name'
  expect(result).to.have.lengthOf(3); // Verifica se tem comprimento 3
  ```

#### 4. `.an` e `.a`

- **`.an`** e **`.a`**: Usados para verificar o tipo da variável. A única diferença é gramatical (usando `an` antes de uma vogal e `a` antes de uma consoante).

  ```javascript
  expect(result).to.be.an('array'); // Verifica se é um array
  expect(result).to.be.a('number'); // Verifica se é um número
  ```

#### 5. `.equal`, `.equals`, `.eq`

- **`.equal`, `.equals`, `.eq`**: Verificam se dois valores são iguais.

  ```javascript
  expect(result).to.equal('Hello'); // Verifica se é igual a 'Hello'
  ```

#### 6. `.not`

Usado para inverter a lógica da asserção. Verifica se algo não é verdadeiro.

```javascript
expect(result).to.not.equal('Goodbye'); // Verifica se não é igual a 'Goodbye'
```

#### 7. `.deep`

Usado para fazer comparações profundas de objetos e arrays (verificando todas as propriedades e elementos).

```javascript
expect(result).to.deep.equal({ name: 'Jenifer' }); // Verifica se os objetos são profundamente iguais
```

#### 8. `.include`, `.includes`

Verifica se um array ou string contém um valor específico, ou se um objeto contém uma propriedade com um valor específico.

```javascript
expect(arr).to.include(5); // Verifica se o array contém o valor 5
expect(obj).to.include({ name: 'Jenifer' }); // Verifica se o objeto contém a propriedade com o valor
```

#### 9. `.lengthOf`

Verifica o comprimento de um array ou string.

```javascript
expect(arr).to.have.lengthOf(3); // Verifica se o array tem comprimento 3
```

#### 10. `.throw`

Verifica se uma função lança um erro.

```javascript
expect(fn).to.throw(Error); // Verifica se lança um erro
```

### Exemplos de Uso

Aqui estão alguns exemplos, com explicações incorporadas:

```javascript
// Verifica se 'result' é um array
expect(result).to.be.an('array'); // "expect result to be an array"

// Verifica se 'result' tem a propriedade 'name'
expect(result).to.have.property('name'); // "expect result to have property 'name'"

// Verifica se 'result' é igual a 'Hello'
expect(result).to.equal('Hello'); // "expect result to equal 'Hello'"

// Verifica se 'arr' contém o valor 5
expect(arr).to.include(5); // "expect array to include 5"

// Verifica se 'obj' contém a propriedade 'name' com valor 'Jenifer'
expect(obj).to.deep.include({ name: 'Jenifer' }); // "expect object to deeply include { name: 'Jenifer' }"

// Verifica se o array 'arr' tem comprimento 3
expect(arr).to.have.lengthOf(3); // "expect array to have length of 3"

// Verifica se a função 'fn' lança um erro
expect(fn).to.throw(Error); // "expect function to throw Error"
```

Essas partes se combinam para formar as cadeias de linguagem do Chai, permitindo escrever asserções de teste de forma fluente e legível.