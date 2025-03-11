# **Teste unitário** **vs.** **Teste de integração**

### Teste Unitário

Um teste unitário é como verificar uma peça específica da casa, como uma torneira da pia da cozinha, para garantir que ela funciona corretamente. Você quer ter certeza de que a torneira abre e fecha sem problemas, que a água sai na pressão certa, e que não há vazamentos.

- **Objetivo**: Garantir que uma parte pequena e específica do sistema funcione corretamente.
- **Exemplo na construção**: Testar se uma torneira da pia da cozinha funciona.
- **Benefícios**: É rápido e fácil de encontrar e corrigir problemas em partes isoladas.
- **Quando usar**: Quando você quer ter certeza de que cada parte individual do sistema está funcionando corretamente antes de juntá-las.

### Teste de Integração

Um teste de integração é como verificar se a torneira da pia da cozinha funciona bem com o encanamento da casa inteira. Você quer ter certeza de que, quando a torneira está ligada, a água flui através dos canos corretamente, que o aquecedor de água está funcionando e que a água chega na temperatura certa.

- **Objetivo**: Garantir que diferentes partes do sistema funcionem bem juntas.
- **Exemplo na construção**: Testar se a torneira da pia da cozinha funciona bem com o encanamento da casa inteira.
- **Benefícios**: Ajuda a encontrar problemas que ocorrem quando diferentes partes do sistema são combinadas.
- **Quando usar**: Quando você quer ter certeza de que todas as partes do sistema funcionam corretamente quando estão juntas.

### Resumo

- **Teste Unitário**: Foca em uma parte específica do sistema (como uma torneira) para garantir que ela funcione bem sozinha.
- **Teste de Integração**: Foca em como diferentes partes do sistema funcionam juntas (como a torneira e todo o encanamento) para garantir que o sistema inteiro funcione bem.

Ambos são importantes porque, assim como na construção de uma casa, você quer ter certeza de que cada parte individual funciona bem e que todas as partes juntas criam uma casa funcional e confortável.

### Teste Funcional

Um teste funcional é como fazer uma inspeção final em toda a casa para garantir que ela atende a todas as suas necessidades e funciona conforme o esperado. É quando você vive na casa por um tempo e usa todos os recursos para ver se tudo funciona corretamente no dia a dia.

- **Objetivo**: Garantir que o sistema inteiro funcione conforme as expectativas e requisitos definidos, verificando se ele realiza as funções para as quais foi projetado.
- **Exemplo na construção**: Morar na casa por alguns dias e usar todos os cômodos e recursos, como abrir portas, acender luzes, usar eletrodomésticos, tomar banho, cozinhar, etc., para ver se tudo está funcionando como deveria.
- **Benefícios**: Ajuda a verificar se o sistema atende aos requisitos do usuário e funciona em um cenário real.
- **Quando usar**: Quando você quer ter certeza de que o sistema completo atende aos requisitos e funciona corretamente no mundo real.

### Diferença entre Teste Funcional e outros Testes

- **Teste Unitário**: Foca em partes específicas e individuais do sistema (como testar apenas uma torneira).
- **Teste de Integração**: Foca em como diferentes partes do sistema funcionam juntas (como testar a torneira com todo o encanamento).
- **Teste Funcional**: Foca em como o sistema inteiro funciona para o usuário final (como viver na casa e usar todos os seus recursos).

### Exemplo de Teste Funcional em Software

Imagine que você tem um aplicativo de banco. Um teste funcional verificaria se você consegue fazer todas as operações principais que um usuário faria, como:

- Fazer login na sua conta.
- Verificar seu saldo.
- Transferir dinheiro para outra conta.
- Pagar uma fatura.
- Verificar o histórico de transações.

Esses testes garantem que o aplicativo realmente funcione como um banco para os usuários e que eles possam realizar todas as operações esperadas sem problemas.

### Resumo

- **Teste Funcional**: Foca em testar o sistema inteiro como um todo, garantindo que ele funcione conforme os requisitos e expectativas do usuário final.
- **Objetivo**: Verificar a funcionalidade completa do sistema em um cenário real.
- **Exemplo**: Morar na casa e usar todos os recursos para garantir que tudo funciona conforme o esperado.

Assim como você gostaria de testar sua casa vivendo nela para garantir que ela é confortável e funcional, os testes funcionais garantem que o software é útil e funciona bem para seus usuários.

## **Supertest**

### Supertest: O que é e Para que Serve

**Supertest** é uma biblioteca de Node.js que facilita a realização de testes de integração em aplicações web. Ele é usado principalmente para testar endpoints HTTP de servidores web, simulando requisições e verificando as respostas. Supertest é frequentemente combinado com frameworks de testes como Mocha, Jest ou Jasmine para criar uma suíte de testes robusta para APIs.

### Principais Usos do Supertest

1. **Testar Endpoints de API**:
   - Verificar se as rotas da API respondem corretamente com os códigos de status esperados.
   - Confirmar se a estrutura e os dados das respostas estão corretos.

2. **Validação de Respostas HTTP**:
   - Validar códigos de status HTTP, como 200 (OK), 201 (Criado), 400 (Requisição Inválida), etc.
   - Verificar cabeçalhos de resposta e corpos de resposta.

3. **Automatização de Testes de Integração**:
   - Garantir que diferentes partes da aplicação, como o servidor e o banco de dados, funcionem bem juntas.
   - Detectar e corrigir problemas de integração antes que afetem os usuários finais.

4. **Facilitação de Testes Assíncronos**:
   - Simplificar a criação de testes para operações assíncronas, que são comuns em aplicações web modernas.

### Como Usar o Supertest

Vamos ver um exemplo prático de como usar o Supertest para testar uma API simples criada com Express.

#### Passo 1: Instalar Dependências

Primeiro, instale o Supertest e um framework de testes como Jest:

```bash
npm install supertest jest
```

#### Passo 2: Criar um Servidor Express Simples

Crie um arquivo `app.js` com um servidor Express básico:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).send({ message: 'Hello, world!' });
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.status(201).send(data);
});

module.exports = app;
```

#### Passo 3: Escrever Testes com Supertest

Crie um arquivo `app.test.js` para escrever os testes:

```javascript
const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  it('GET /hello should return "Hello, world!"', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });

  it('POST /data should create and return data', async () => {
    const data = { name: 'John Doe', age: 30 };
    const response = await request(app).post('/data').send(data);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(data);
  });
});
```

#### Passo 4: Executar os Testes

Adicione um script de teste no `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Execute os testes com o comando:

```bash
npm test
```

### Resumo

- **Supertest** é uma biblioteca de Node.js usada para realizar testes de integração em APIs HTTP.
- **Principais usos** incluem testar endpoints, validar respostas HTTP, automatizar testes de integração e facilitar testes assíncronos.
- **Integração**: Funciona bem com frameworks de teste como Jest, Mocha ou Jasmine.
- **Exemplo prático**: Mostra como configurar um servidor Express, escrever testes com Supertest e executar esses testes com Jest.

Supertest é uma ferramenta essencial para desenvolvedores que desejam garantir que suas APIs funcionem corretamente, permitindo detectar e corrigir problemas de forma eficiente.

### **Elementos avançados** **Testing**

Para realizar testes avançados com Supertest, vamos explorar alguns conceitos e técnicas mais sofisticados. Isso inclui testar middleware, autenticação, manipulação de cookies e cabeçalhos, além de testes de desempenho e simulação de falhas. Vamos aprofundar em alguns desses tópicos:

### 1. Testando Middleware

Middleware são funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função no ciclo de solicitação/resposta. Testar middleware pode ser essencial para garantir que sua lógica de pré-processamento ou validação funcione corretamente.

#### Exemplo:

```javascript
const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
  if (req.headers['x-auth'] === 'secret') {
    next();
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

app.use(myMiddleware);

app.get('/secure', (req, res) => {
  res.status(200).send({ message: 'You are authorized' });
});

module.exports = app;
```

#### Teste do Middleware:

```javascript
const request = require('supertest');
const app = require('./app');

describe('Middleware Tests', () => {
  it('should return 401 if no auth header is present', async () => {
    const response = await request(app).get('/secure');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Unauthorized');
  });

  it('should return 200 if auth header is present', async () => {
    const response = await request(app)
      .get('/secure')
      .set('x-auth', 'secret');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('You are authorized');
  });
});
```

### 2. Testando Autenticação

Autenticação é uma parte crucial de muitas APIs. Testar autenticação normalmente envolve a simulação de login, a obtenção de tokens e a utilização desses tokens em chamadas subsequentes.

#### Exemplo:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [{ id: 1, username: 'user', password: 'password' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.status(200).send({ token });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Unauthorized' });
      } else {
        res.status(200).send({ message: 'Welcome!', userId: decoded.id });
      }
    });
  } else {
    res.status(401).send({ message: 'No token provided' });
  }
});

module.exports = app;
```

#### Teste de Autenticação:

```javascript
const request = require('supertest');
const app = require('./app');

describe('Authentication Tests', () => {
  let token;

  it('should return 200 and a token for valid login', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    token = response.body.token; // armazenar o token para outros testes
  });

  it('should return 401 for invalid login', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'wrongpassword' });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });

  it('should return 200 for valid token on protected route', async () => {
    const response = await request(app)
      .get('/protected')
      .set('Authorization', token);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome!');
  });

  it('should return 401 for no token on protected route', async () => {
    const response = await request(app).get('/protected');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('No token provided');
  });

  it('should return 401 for invalid token on protected route', async () => {
    const response = await request(app)
      .get('/protected')
      .set('Authorization', 'invalidtoken');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Unauthorized');
  });
});
```

### 3. Manipulação de Cookies e Cabeçalhos

Testar cookies e cabeçalhos pode ser importante para funcionalidades que dependem de estado ou informações específicas.

#### Exemplo de Teste de Cookies:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('test', 'cookie-value').send({ message: 'Cookie set' });
});

app.get('/get-cookie', (req, res) => {
  const cookie = req.cookies['test'];
  res.send({ cookie });
});

module.exports = app;
```

#### Teste de Cookies:

```javascript
const request = require('supertest');
const app = require('./app');

describe('Cookie Tests', () => {
  it('should set a cookie', async () => {
    const response = await request(app).get('/set-cookie');
    expect(response.status).toBe(200);
    expect(response.headers['set-cookie']).toBeDefined();
  });

  it('should get a cookie', async () => {
    const response = await request(app).get('/set-cookie');
    const cookie = response.headers['set-cookie'];
    const getResponse = await request(app)
      .get('/get-cookie')
      .set('Cookie', cookie);
    expect(getResponse.body.cookie).toBe('cookie-value');
  });
});
```

### 4. Testes de Desempenho

Supertest pode ser usado junto com outras ferramentas para testes de desempenho. Embora não seja uma ferramenta de benchmark, ele pode ser usado para garantir que as respostas sejam rápidas e dentro dos limites aceitáveis.

#### Exemplo de Teste de Desempenho:

```javascript
const request = require('supertest');
const app = require('./app');

describe('Performance Tests', () => {
  it('should respond within 200ms', async () => {
    const start = Date.now();
    await request(app).get('/hello');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(200);
  });
});
```

### Resumo

- **Middleware**: Testar o comportamento de middleware para garantir que as requisições são processadas corretamente.
- **Autenticação**: Verificar se o processo de login e uso de tokens JWT funciona como esperado.
- **Cookies e Cabeçalhos**: Manipular e verificar cookies e cabeçalhos em requisições.
- **Desempenho**: Garantir que as respostas do servidor são rápidas e dentro dos limites aceitáveis.

Supertest é uma ferramenta poderosa para testar diversas partes da sua aplicação web, garantindo que a API esteja funcionando corretamente em todos os aspectos. Esses exemplos avançados demonstram como você pode utilizar Supertest para realizar testes mais sofisticados e abrangentes.