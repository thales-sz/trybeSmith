# Trybesmith

## Resumo

Um inventario de uma loja onde, você pode criar novos items, puxar uma lista com os items e seus preços, cadastrar clientes e gerar pedidos.

Esta loja foi desenvolvida usando MySQL para o banco de dados que armazena as informações dos itens, dos clientes e dos pedidos, ExpressJS com a metodologia MSC (Models, Service and Controllers) para as requisições CRUD (Create, Read, Update and Delete), linguagem Typescript e as bibliotecas Joi para validação dos campos das requisições e JWT (JSON Web Token) para criação e validação de tokens de acesso.


## Tecnologias Usadas

> Typescript, ExpressJS com operações CRUD, metodologia MSC, MySQL, Joi e JWT

## Rodando o Projeto

### Instalando Dependências

```bash
cd Trybesmith
npm install
```

### Executando a Aplicação

>Para a criação do banco de dados:

```bash
npm run create:db
```

>Para inicar a aplicação:

```bash
npm start
```

> Para rodar localmente é necessaria a criação de um arquivo **.env**. Siga o exemplo do arquivo **.env.example** presente no projto para isso.

### Rodando com Docker

```bash
docker-compose up -d
docker exec -it trybesmith bash
npm install
npm run create:db
npm start
```

>A aplicação irá rodar por padrão na porta 3000
