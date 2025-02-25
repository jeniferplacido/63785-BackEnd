# **Frameworks de desenvolvimento: Nestjs (Parte I)**

## **O que é um framework de desenvolvimento?**

Um framework de desenvolvimento é uma espécie de "caixa de ferramentas" para programadores. Imagine que você vai construir uma casa. Você precisa de várias ferramentas e materiais: martelos, pregos, madeira, tijolos, etc. Um framework é como se fosse um conjunto completo de ferramentas que já vem com instruções de como usá-las da melhor forma para construir essa casa.

Em termos de software, um framework é um conjunto de códigos prontos e estruturados que ajuda os desenvolvedores a construir aplicações de maneira mais eficiente e organizada. Ele fornece uma base sólida e padronizada, permitindo que os programadores se concentrem mais nas partes específicas e criativas do projeto, em vez de se preocuparem com tarefas básicas e repetitivas.

Aqui estão alguns pontos principais sobre frameworks de desenvolvimento:

1. **Base Pré-Construída**: Ele oferece uma estrutura de código básica e pronta para uso, facilitando o início do projeto.

2. **Padrões e Boas Práticas**: Ele sugere ou impõe certas práticas e padrões, garantindo que o código seja mais consistente e de alta qualidade.

3. **Bibliotecas e Ferramentas**: Inclui várias bibliotecas e ferramentas que ajudam a resolver problemas comuns de programação, como acesso a banco de dados, autenticação de usuários, manipulação de arquivos, entre outros.

4. **Eficiência**: Com um framework, o desenvolvimento de software se torna mais rápido, pois muitos dos componentes necessários já estão disponíveis e testados.

5. **Comunidade e Suporte**: A maioria dos frameworks populares possui uma grande comunidade de desenvolvedores, o que significa que você pode encontrar facilmente ajuda e recursos na internet.

### Exemplos de Frameworks

- **Django**: Usado para desenvolvimento web com Python.
- **React**: Uma biblioteca (ou framework, dependendo da perspectiva) para criar interfaces de usuário com JavaScript.
- **Laravel**: Um framework PHP para desenvolvimento web.
- **Spring**: Usado para construir aplicações em Java.
- **NestJS**: Um framework para construir aplicações em Node.js com TypeScript.

Um framework de desenvolvimento é como um conjunto de ferramentas e instruções que ajuda os programadores a construir software de maneira mais rápida, eficiente e organizada.

## **Por que um framework é diferente de bibliotecas?**

Um framework e uma biblioteca são ferramentas que ajudam os desenvolvedores, mas têm diferenças fundamentais em como são usadas e na estrutura que fornecem. Vou explicar a diferença usando uma analogia e depois com termos mais técnicos:

### Analogia

Imagine que você está cozinhando:

- **Biblioteca**: É como um livro de receitas. Você escolhe uma receita específica e segue as instruções. Você está no controle e decide quais receitas usar e como combinar diferentes receitas para fazer o seu prato.

- **Framework**: É como um chef de cozinha que te dá um menu completo e uma sequência de passos para seguir. O chef (framework) está no controle da cozinha, e você segue as instruções dele para preparar o prato. O framework define a estrutura geral e o fluxo do trabalho, enquanto você preenche os detalhes específicos.

### Termos Técnicos

#### Biblioteca

- **Uso**: Uma biblioteca é um conjunto de funções ou classes que você pode chamar quando precisar. Você está no controle do fluxo da aplicação e decide quando e como usar essas funções.

- **Flexibilidade**: Você pode usar diferentes bibliotecas em diferentes partes do seu código, combinando-as da maneira que achar melhor.

- **Exemplo**: jQuery é uma biblioteca JavaScript que você pode usar para manipular o DOM (Document Object Model) de uma página web. Você decide quando chamar as funções do jQuery em seu código.

#### Framework

- **Uso**: Um framework é uma estrutura de código que define a arquitetura da sua aplicação. Ele chama o seu código em certos pontos, de acordo com o fluxo pré-definido pelo framework. Em outras palavras, o framework é quem controla a aplicação e define o "esqueleto" do projeto.

- **Estrutura**: Um framework impõe uma estrutura específica e um conjunto de regras para o desenvolvimento. Ele oferece uma base consistente e padronizada, o que pode acelerar o desenvolvimento e garantir boas práticas.

- **Exemplo**: Angular é um framework JavaScript para construir aplicações web. Ele define como a aplicação deve ser estruturada, como os componentes devem ser criados e interagem entre si, e como os dados devem ser gerenciados.

### Resumo das Diferenças

- **Controle**: Com uma biblioteca, você controla o fluxo da aplicação. Com um framework, o framework controla o fluxo da aplicação e você preenche os detalhes.

- **Estrutura**: Bibliotecas são mais flexíveis e podem ser usadas conforme necessário. Frameworks impõem uma estrutura específica e um modo de trabalho que você deve seguir.

A principal diferença entre um framework e uma biblioteca é o controle do fluxo da aplicação e a estrutura que eles impõem. Uma biblioteca oferece ferramentas que você pode usar livremente, enquanto um framework fornece uma estrutura e um fluxo de trabalho definidos, nos quais você deve encaixar seu código.

## Vantagens de utilizar um framework:

### 1. **Eficiência no Desenvolvimento**

Frameworks fornecem uma estrutura pronta e componentes pré-construídos, o que pode acelerar significativamente o processo de desenvolvimento. Isso permite que os desenvolvedores se concentrem mais na lógica de negócios e nas funcionalidades específicas da aplicação, em vez de reinventar a roda para cada projeto.

### 2. **Padrões e Boas Práticas**

Frameworks geralmente incorporam padrões de design e boas práticas de programação, ajudando a garantir que o código seja consistente, organizado e de alta qualidade. Isso pode reduzir erros e facilitar a manutenção a longo prazo.

### 3. **Comunidade e Suporte**

Frameworks populares têm grandes comunidades de desenvolvedores, o que significa que há uma abundância de recursos, como documentação, tutoriais, fóruns de discussão e bibliotecas de terceiros. Isso facilita a resolução de problemas e a obtenção de suporte quando necessário.

### 4. **Manutenção e Atualizações**

Frameworks são frequentemente atualizados para corrigir bugs, melhorar a segurança e adicionar novas funcionalidades. Usar um framework significa que você pode se beneficiar dessas atualizações sem ter que fazer todo o trabalho por conta própria.

### 5. **Segurança**

Muitos frameworks incluem recursos de segurança embutidos, como proteção contra ataques comuns (e.g., SQL injection, Cross-Site Scripting). Isso pode ajudar a proteger sua aplicação contra vulnerabilidades conhecidas e reduzir o risco de ataques.

### 6. **Escalabilidade**

Frameworks são projetados para serem escaláveis, permitindo que sua aplicação cresça em termos de funcionalidade e complexidade sem comprometer o desempenho. Eles oferecem ferramentas e padrões que facilitam a escalabilidade tanto vertical quanto horizontal.

### 7. **Integração Facilitada**

Frameworks geralmente vêm com suporte para integração com diversas ferramentas e bibliotecas, como sistemas de gerenciamento de banco de dados, bibliotecas de autenticação, serviços de terceiros, entre outros. Isso facilita a construção de aplicações complexas com diversas dependências.

### 8. **Produtividade da Equipe**

O uso de um framework pode aumentar a produtividade da equipe de desenvolvimento, pois todos os membros trabalham com a mesma estrutura e padrões. Isso facilita a colaboração, a revisão de código e a integração de novos desenvolvedores no projeto.

### 9. **Testabilidade**

Muitos frameworks são projetados com a testabilidade em mente, oferecendo suporte integrado para testes unitários, testes de integração e testes de ponta a ponta. Isso ajuda a garantir que a aplicação funcione corretamente e que novos recursos não introduzam bugs.

### 10. **Customização**

Embora forneçam uma estrutura básica, frameworks são frequentemente altamente customizáveis. Isso permite que você adapte o framework às necessidades específicas do seu projeto, aproveitando o melhor dos dois mundos: estrutura e flexibilidade.

### Exemplos de Frameworks e suas Vantagens Específicas

- **Django (Python)**: Promove desenvolvimento rápido e limpo, com uma forte ênfase na DRY (Don't Repeat Yourself) e inclui muitas funcionalidades embutidas como autenticação e administração.
- **React (JavaScript)**: Facilita a criação de interfaces de usuário interativas e reutilizáveis, com uma grande comunidade de suporte.
- **Spring (Java)**: Oferece uma vasta gama de funcionalidades para construção de aplicações robustas e escaláveis, com forte suporte para injeção de dependência e programação orientada a aspectos.

Usar um framework pode trazer inúmeras vantagens, desde a eficiência no desenvolvimento até a segurança e escalabilidade da aplicação. Ele fornece uma base sólida e padronizada, permitindo que os desenvolvedores se concentrem nas funcionalidades específicas do projeto, enquanto se beneficiam das melhores práticas e suporte da comunidade.

## Desvantagens em utilizar frameworks:

Embora os frameworks ofereçam muitas vantagens, eles também apresentam algumas desvantagens que podem impactar o desenvolvimento de um projeto. Aqui estão algumas das principais desvantagens de usar um framework:

### 1. **Curva de Aprendizado**

Frameworks podem ser complexos e levar tempo para serem dominados. Desenvolvedores novos no framework podem precisar investir tempo significativo para aprender seus conceitos, padrões e práticas recomendadas, o que pode atrasar o início do projeto.

### 2. **Rigidez**

Frameworks impõem uma estrutura e padrões específicos que podem ser restritivos. Isso pode limitar a flexibilidade e a liberdade dos desenvolvedores para implementar soluções de maneira personalizada. Em alguns casos, adaptar um framework às necessidades específicas de um projeto pode ser desafiador e pode exigir trabalho adicional.

### 3. **Dependência de Terceiros**

Usar um framework significa depender de código e atualizações de terceiros. Se o desenvolvimento ou o suporte ao framework for descontinuado, ou se houver uma mudança de direção que não se alinha com as necessidades do seu projeto, isso pode criar problemas significativos.

### 4. **Sobrecarga de Funcionalidades**

Frameworks geralmente vêm com uma ampla gama de funcionalidades, muitas das quais podem não ser necessárias para o seu projeto. Isso pode resultar em sobrecarga de código e consumo de recursos desnecessários, potencialmente afetando o desempenho da aplicação.

### 5. **Dificuldade de Customização**

Embora muitos frameworks sejam customizáveis, ajustar o framework para atender às necessidades específicas do projeto pode ser complicado e demorado. Alguns frameworks têm áreas que são difíceis de modificar sem causar problemas de compatibilidade ou estabilidade.

### 6. **Atualizações e Compatibilidade**

Manter um framework atualizado pode ser desafiador, especialmente se houver grandes mudanças entre versões. Atualizações podem introduzir breaking changes que exigem modificações significativas no código existente, o que pode ser trabalhoso e arriscado.

### 7. **Complexidade Adicional**

Frameworks adicionam uma camada extra de complexidade ao projeto. Para projetos muito simples, essa complexidade adicional pode não ser justificada e pode tornar o desenvolvimento e a manutenção mais complicados do que o necessário.

### 8. **Desempenho**

Em alguns casos, a abstração e as funcionalidades adicionais fornecidas pelo framework podem introduzir sobrecarga que afeta o desempenho da aplicação. Frameworks generalistas podem não ser tão otimizados quanto uma solução feita sob medida para um caso específico.

### 9. **Bloqueio de Tecnologia**

Uma vez que você começa a usar um framework, mudar para outra tecnologia ou framework pode ser difícil e caro. Esse bloqueio tecnológico pode limitar as opções no futuro e tornar a migração para novas tecnologias mais complicada.

### Exemplos de Situações de Desvantagens Específicas

- **Complexidade de Spring (Java)**: O Spring Framework é poderoso, mas sua vasta gama de funcionalidades pode ser avassaladora e desnecessária para projetos menores.
- **Tamanho de Aplicação com Angular (JavaScript)**: Aplicações Angular podem se tornar grandes e pesadas, impactando o desempenho, especialmente em dispositivos com recursos limitados.
- **Curva de Aprendizado de Django (Python)**: Apesar de suas vantagens, Django pode ser complexo para iniciantes devido à sua estrutura e padrões de desenvolvimento.

Enquanto frameworks podem acelerar o desenvolvimento e garantir consistência e qualidade, é importante considerar as desvantagens antes de decidir adotar um. Avaliar as necessidades específicas do projeto, a experiência da equipe e o impacto potencial das desvantagens é crucial para fazer uma escolha informada. Em alguns casos, pode ser mais vantajoso optar por uma abordagem mais leve ou até mesmo construir uma solução personalizada.

## Nestjs

NestJS é um framework progressivo para construção de aplicações server-side eficientes e escaláveis com Node.js. Ele utiliza TypeScript por padrão (mas também suporta JavaScript) e é inspirado por conceitos de programação orientada a objetos, programação funcional e programação reativa. NestJS é construído sobre o framework Express (ou Fastify, opcionalmente) e usa o poder de TypeScript para criar uma arquitetura modular e organizada.

### Características Principais do NestJS

1. **Modularidade**: NestJS permite a criação de módulos que podem ser facilmente reutilizados e organizados dentro da aplicação. Isso facilita a manutenção e a escalabilidade do código.

2. **Arquitetura**: Utiliza uma arquitetura baseada em decoradores e metadados, proporcionando uma estrutura clara e organizada, similar à de frameworks como Angular.

3. **TypeScript**: Aproveita as vantagens do TypeScript, como tipagem estática, autocompletar e interfaces, melhorando a qualidade do código e reduzindo bugs.

4. **Injeção de Dependência**: Possui um sistema robusto de injeção de dependências que facilita a criação de componentes desacoplados e facilmente testáveis.

5. **Flexibilidade**: Permite a integração com diversos bancos de dados, bibliotecas e frameworks através de módulos, oferecendo flexibilidade na escolha das tecnologias.

6. **Suporte para Microserviços**: Inclui suporte nativo para a construção de microserviços, permitindo que a aplicação seja dividida em serviços menores e independentes, facilitando a escalabilidade horizontal.

7. **Suporte a WebSockets**: Fornece suporte integrado para WebSockets, facilitando a construção de aplicações em tempo real.

### Para Que Serve o NestJS

NestJS é ideal para construir uma variedade de aplicações server-side, incluindo, mas não se limitando a:

1. **APIs RESTful**: Criação de APIs robustas e escaláveis com suporte a middleware, autenticação, validação e outras funcionalidades necessárias.

2. **Microserviços**: Desenvolvimento de arquiteturas de microserviços que são facilmente escaláveis e mantíveis.

3. **Aplicações em Tempo Real**: Construção de aplicações que necessitam de comunicação em tempo real, como chats, notificações instantâneas, jogos online, etc.

4. **Aplicações CRUD**: Aplicações que exigem operações de criação, leitura, atualização e exclusão, com estrutura modular e organizada.

5. **Plataformas Corporativas**: Desenvolvimento de grandes sistemas corporativos que requerem uma arquitetura bem definida, modularidade e suporte a múltiplos serviços e integrações.

### **Componentes gerais da arquitetura Nestjs**

A arquitetura do NestJS é projetada para ser modular e escalável, incorporando os melhores conceitos de diversos frameworks modernos. Aqui estão os componentes gerais da arquitetura NestJS:

### 1. Módulos (Modules)

Os módulos são a base da arquitetura do NestJS. Eles agrupam os componentes relacionados, como controladores, serviços e provedores. Cada aplicação NestJS tem pelo menos um módulo principal (`AppModule`).

**Exemplo:**

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

### 2. Controladores (Controllers)

Os controladores são responsáveis por lidar com as requisições HTTP, definir as rotas e retornar respostas ao cliente. Eles utilizam decoradores para definir as rotas e os métodos HTTP.

**Exemplo:**

```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
```

### 3. Serviços (Services)

Os serviços contêm a lógica de negócios e são injetados nos controladores através do sistema de injeção de dependências do NestJS. Eles são anotados com o decorador `@Injectable()`.

**Exemplo:**

```typescript
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'User created';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }
}
```

### 4. Data Transfer Objects (DTOs)

Os DTOs são objetos que definem a estrutura dos dados transmitidos entre o cliente e o servidor. Eles são usados para validação e tipagem.

**Exemplo:**

```typescript
export class CreateUserDto {
  id: number;
  name: string;
  age: number;
}
```

### 5. Pipes

Os pipes são usados para transformar ou validar dados antes de serem processados pelo controlador. O NestJS fornece vários pipes embutidos e permite a criação de pipes personalizados.

**Exemplo:**

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

### 6. Guards

Os guards são usados para determinar se uma rota específica pode ser acessada ou não. Eles são utilizados para implementar lógica de autenticação e autorização.

**Exemplo:**

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: any): boolean {
  // Lógica de validação
  return true;
}
```

### 7. Interceptors

Os interceptors são usados para adicionar lógica antes ou depois da execução de um método do controlador. Eles podem ser usados para manipulação de respostas, logging, etc.

**Exemplo:**

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => ({ data })));
  }
}
```

### 8. Filtros de Exceção (Exception Filters)

Os filtros de exceção são usados para capturar e tratar exceções lançadas dentro de uma aplicação NestJS. Eles ajudam a centralizar a lógica de tratamento de erros.

**Exemplo:**

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        message: exception.message,
      });
  }
}
```

### 9. Decorators

Os decoradores são usados para definir metadados para classes e métodos. Eles são amplamente utilizados no NestJS para definir controladores, métodos de rotas, injeção de dependências, etc.

**Exemplo:**

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }
}
```

### 10. Middleware

Os middlewares são funções que são executadas antes dos controladores e manipuladores de rotas. Eles são usados para tarefas comuns, como autenticação, logging, etc.

**Exemplo:**

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

### Resumo da Arquitetura NestJS

- **Módulos**: Organizam a aplicação em partes coesas e reutilizáveis.
- **Controladores**: Gerenciam as requisições e enviam respostas.
- **Serviços**: Contêm a lógica de negócios e são injetados nos controladores.
- **DTOs**: Definem a estrutura dos dados de entrada e saída.
- **Pipes**: Transformam e validam dados.
- **Guards**: Implementam lógica de autorização.
- **Interceptors**: Manipulam as respostas.
- **Filtros de Exceção**: Tratam as exceções.
- **Decoradores**: Definem metadados para classes e métodos.
- **Middleware**: Executam tarefas antes dos controladores.

Essa arquitetura modular e organizada do NestJS permite a construção de aplicações escaláveis, testáveis e de fácil manutenção.

### Exemplo de Estrutura de Código com NestJS

Aqui está um exemplo básico de uma aplicação NestJS:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

```

**Métodos principais** **em** **Nestjs**

NestJS é um framework poderoso e flexível para construção de aplicações server-side com Node.js, oferecendo uma arquitetura modular e organizada, suporte a TypeScript, injeção de dependências, e muitas outras funcionalidades que facilitam o desenvolvimento de aplicações robustas e escaláveis. Ele é uma excelente escolha para desenvolvedores que procuram uma solução moderna e eficiente para construir suas aplicações back-end.

O NestJS é um framework progressivo para construir aplicações server-side Node.js eficientes, escaláveis e facilmente testáveis. Ele adota a modularidade, decorators e injeção de dependências inspirados no Angular.

### Principais Métodos em NestJS

1. **Controller Methods**

   - **@Get()**: Lida com requisições HTTP GET.
   - **@Post()**: Lida com requisições HTTP POST.
   - **@Put()**: Lida com requisições HTTP PUT.
   - **@Delete()**: Lida com requisições HTTP DELETE.
   - **@Patch()**: Lida com requisições HTTP PATCH.
   - **@Param()**: Extrai parâmetros de rota.
   - **@Query()**: Extrai parâmetros de query string.
   - **@Body()**: Extrai o corpo da requisição.
   - **@Headers()**: Extrai cabeçalhos HTTP.

2. **Service Methods**

   - Métodos personalizados definidos pelo desenvolvedor para lidar com a lógica de negócio. Exemplo:

     ```typescript
     import { Injectable } from '@nestjs/common';
     
     @Injectable()
     export class UsersService {
       findAll() {
         return `This action returns all users`;
       }
     
       findOne(id: number) {
         return `This action returns a #${id} user`;
       }
     
       create(createUserDto: CreateUserDto) {
         return 'This action adds a new user';
       }
     
       update(id: number, updateUserDto: UpdateUserDto) {
         return `This action updates a #${id} user`;
       }
     
       remove(id: number) {
         return `This action removes a #${id} user`;
       }
     }
     ```

3. **Module Methods**

   - **@Module()**: Declara um módulo que pode conter providers, controllers e imports de outros módulos.
   - **forRoot()**: Método estático usado para configurar o módulo principal da aplicação.
   - **forFeature()**: Método usado para configurar módulos de funcionalidades específicas.

4. **Middleware Methods**

   - Métodos que interceptam requisições antes de serem processadas pelo controlador. Exemplo:

     ```typescript
     import { Injectable, NestMiddleware } from '@nestjs/common';
     import { Request, Response, NextFunction } from 'express';
     
     @Injectable()
     export class LoggerMiddleware implements NestMiddleware {
       use(req: Request, res: Response, next: NextFunction) {
         console.log('Request...');
         next();
       }
     }
     ```

5. **Interceptor Methods**

   - Métodos que interceptam requisições/respostas para modificar ou adicionar comportamento antes/depois da execução do controlador. Exemplo:

     ```typescript
     import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
     import { Observable } from 'rxjs';
     import { map } from 'rxjs/operators';
     
     @Injectable()
     export class TransformInterceptor implements NestInterceptor {
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         return next.handle().pipe(map(data => ({ data })));
       }
     }
     ```

6. **Pipe Methods**

   - Métodos para transformar ou validar dados antes de chegarem ao controlador. Exemplo:

     ```typescript
     import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
     
     @Injectable()
     export class ParseIntPipe implements PipeTransform<string, number> {
       transform(value: string, metadata: ArgumentMetadata): number {
         const val = parseInt(value, 10);
         if (isNaN(val)) {
           throw new BadRequestException('Validation failed');
         }
         return val;
       }
     }
     ```

7. **Guard Methods**

   - Métodos usados para determinar se uma determinada rota pode ser acessada por um usuário. Exemplo:

     ```typescript
     import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
     import { Observable } from 'rxjs';
     
     @Injectable()
     export class AuthGuard implements CanActivate {
       canActivate(
         context: ExecutionContext,
       ): boolean | Promise<boolean> | Observable<boolean> {
         const request = context.switchToHttp().getRequest();
         return validateRequest(request);
       }
     }
     
     function validateRequest(request: any): boolean {
       // Lógica de validação
       return true;
     }
     ```

8. **Decorator Methods**

   - **@Injectable()**: Marca uma classe como um provider injetável.
   - **@Inject()**: Injeta uma dependência específica.
   - **@Optional()**: Marca uma dependência como opcional.
   - **@Module()**: Declara um módulo.
   - **@Controller()**: Declara um controlador.
   - **@Get()**, **@Post()**, **@Put()**, **@Delete()**, **@Patch()**: Declaram rotas HTTP.

### Exemplo Completo

Aqui está um exemplo completo que utiliza alguns dos métodos principais mencionados acima:

```typescript
// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}

// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// src/users/controllers/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

// src/users/services/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  remove(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    return `This action removes a #${id} user`;
  }
}

// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  id: number;
  name: string;
}
```