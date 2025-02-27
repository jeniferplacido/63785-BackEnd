# NestJS + MongoDB parte II🌟

---

## Como o Mongoose Funciona no NestJS? 🐍

O **Mongoose** é como um "amigo tradutor" entre o NestJS e o MongoDB. Ele nos ajuda a:

- Definir **schemas**: Regras que dizem como nossos dados devem ser (ex.: "um usuário tem nome e email").
- Criar **modelos**: Ferramentas para salvar, buscar ou editar dados no banco.
- Trabalhar com **TypeScript**: O NestJS ama tipagem forte, e o Mongoose se adapta a isso.

Imagine que o Mongoose é uma ponte: de um lado, seu código organizado no NestJS; do outro, o MongoDB guardando os dados em formato JSON. Ele faz tudo ficar mais fácil e seguro! Vamos ver como usá-lo? 😉

---

## Instalação 🛠️

Antes de começar, precisamos instalar o NestJS e o Mongoose. Vamos fazer isso no terminal:

```bash
# Crie um projeto novo com o NestJS CLI
npx @nestjs/cli new meu-projeto
cd meu-projeto

# Instale o Mongoose e o suporte do NestJS para ele
npm install @nestjs/mongoose mongoose
```

### O que aconteceu?

- `npx @nestjs/cli new meu-projeto`: Criou uma pasta com uma aplicação NestJS básica.
- `npm install @nestjs/mongoose mongoose`: Adicionou o Mongoose e a integração dele com o NestJS.

Agora, rode `npm run start` para testar. Se aparecer "Hello World!" no navegador (em `http://localhost:3000`), deu certo! 🎉

---

## Usando Mongoose no `app.module.ts` ⚙️

O arquivo `app.module.ts` é como o "quartel-general" da sua aplicação. É aqui que conectamos o MongoDB:

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/meu-banco'), // URL do MongoDB
  ],
})
export class AppModule {}
```

### Explicando cada pedaço:

- `@Module`: Define um módulo no NestJS (um pedaço organizado do seu app).
- `imports`: Lista os "recursos" que o módulo usa.
- `MongooseModule.forRoot`: Faz a conexão com o MongoDB. O argumento `'mongodb://localhost/meu-banco'` é o endereço do banco. Se você usa MongoDB Atlas (na nuvem), troque por algo assim: `'mongodb+srv://usuario:senha@cluster.mongodb.net/meu-banco'`.

Teste com `npm run start`. Se não houver erros, estamos conectados ao MongoDB local! 🚀

---

## Vamos Declarar Nossos Usuários Novamente 👩‍💻👨‍💻

Queremos criar uma aplicação que gerencia **usuários**. Vamos imaginar o que cada usuário precisa:

- **Nome**: Uma string (ex.: "João").
- **Email**: Uma string única (ex.: "joao@email.com").
- **Idade**: Um número (ex.: 30).

Isso vai virar um **schema** no MongoDB. Pense nisso como um "molde" para os dados!

---

## Vamos Pensar em MongoDB 🧠

O MongoDB é diferente de bancos como MySQL. Ele é **NoSQL**, o que significa:

- Não usa tabelas, mas **coleções** (como pastas).
- Cada item numa coleção é um **documento** (como um arquivo JSON).

Exemplo de um documento de usuário:

```json
{
  "_id": "12345",
  "nome": "João",
  "email": "joao@email.com",
  "idade": 30
}
```

A coleção `users` será como uma "pasta" cheia de documentos assim. Sem colunas fixas, super flexível! 😊

---

## Vamos Analisar um Schema! 📋

Um **schema** é o "projeto" dos nossos dados. Vamos criar um para usuários em `user.schema.ts`:

```typescript
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  nome: { type: String, required: true }, // Nome é obrigatório
  email: { type: String, required: true, unique: true }, // Email único
  idade: { type: Number, required: false }, // Idade é opcional
});
```

### O que significa isso?

- `type: String`: O campo é uma string.
- `required: true`: Não pode ser vazio.
- `unique: true`: Não pode repetir (ótimo para emails!).

Esse schema é como dizer: "MongoDB, só aceite usuários assim!"

---

## Conecte o Schema ao Contexto de Usuário 🔗

Agora, criamos um módulo para usuários (`users.module.ts`):

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class UsersModule {}
```

### Detalhando:

- `MongooseModule.forFeature`: Registra o schema no módulo.
- `name: 'User'`: Nome da coleção no MongoDB (vai virar "users" no plural automaticamente).
- `schema: UserSchema`: O "molde" que criamos.

Adicione `UsersModule` ao `app.module.ts`:

```typescript
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/meu-banco'),
    UsersModule,
  ],
})
export class AppModule {}
```

---

## Exemplos: Criando um Serviço ✍️

Vamos criar um serviço (`users.service.ts`) para lidar com usuários:

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async create(nome: string, email: string, idade: number) {
    const newUser = new this.userModel({ nome, email, idade });
    return newUser.save(); // Salva no MongoDB
  }

  async findAll() {
    return this.userModel.find().exec(); // Busca todos os usuários
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec(); // Busca por ID
  }
}
```

### Como funciona?

- `@InjectModel('User')`: Pega o modelo "User" que registramos.
- `new this.userModel({...})`: Cria um novo usuário.
- `.save()`: Envia pro MongoDB.
- `.find()` e `.findById()`: Métodos do Mongoose para buscar dados.

---

## Sobre a Importação do `MongooseModule` 📦

O `MongooseModule` tem dois papéis:

- **`forRoot()`**: Usado no `app.module.ts` para conectar ao banco.
- **`forFeature()`**: Usado nos módulos (como `users.module.ts`) para registrar schemas.

Exemplo completo:

- `forRoot`: "Oi, MongoDB, estou aqui!"
- `forFeature`: "Quero trabalhar com essa coleção!"

Eles são como uma dupla dinâmica! 🤝

---

## Injetando o Modelo no Serviço 💉

No serviço, o `@InjectModel('User')` "injeta" o modelo, permitindo usar métodos como:

- `save()`: Salvar.
- `find()`: Buscar todos.
- `findById()`: Buscar um.

É como dar superpoderes ao serviço para falar com o MongoDB! 🦸‍♂️

---

## Middlewares 🛡️

O NestJS usa o **Express** por baixo dos panos, então middlewares são funções que "interceptam" requisições.

### Estrutura de um Middleware

Crie `logger.middleware.ts`:

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Passa para o próximo passo
  }
}
```

### Como Conectá-lo?

No `app.module.ts`:

```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/meu-banco'), UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Todas as rotas
  }
}
```

### Middleware em Ação

Rode o app e acesse `http://localhost:3000`. O console vai mostrar algo como:

```
[26/02/2025, 10:00:00] GET /
```

Ele loga cada requisição! 🎬

---

## Gerenciamento de Ambientes 🌍

Quer trocar a URL do MongoDB sem mudar o código? Use variáveis de ambiente!

### Instalação

```bash
npm install @nestjs/config
```

### Habilitando Configuração

No `app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carrega o .env
    MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost/meu-banco'),
    UsersModule,
  ],
})
export class AppModule {}
```

Crie um arquivo `.env` na raiz:

```
MONGO_URL=mongodb://localhost/meu-banco
```

### Usando em Outros Módulos

No `users.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {
    const mongoUrl = this.configService.get<string>('MONGO_URL');
    console.log(`Usando banco: ${mongoUrl}`);
  }
}
```

---

## Serviço Injetado no Controlador 🎮

Crie `users.controller.ts`:

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() body: { nome: string; email: string; idade: number }) {
    return this.usersService.create(body.nome, body.email, body.idade);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
```

### Testando:

- Use Postman ou cURL:
  - `POST http://localhost:3000/users` com corpo `{ "nome": "Ana", "email": "ana@email.com", "idade": 25 }`.
  - `GET http://localhost:3000/users` para ver todos.

---

## ExpressJS ou NestJS? 🤔

- **ExpressJS**: Rápido e simples, mas você faz tudo "na mão".
- **NestJS**: Mais organizado, com módulos, injeção de dependências e TypeScript. Ideal para projetos grandes!

Escolha NestJS se quer crescer sem bagunça! 🚀

---



```

```