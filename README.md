# Uma API REST simples para consumo de dados

Para subir o projeto no ar com SQLite, copie o arquivo `.env_example` para `.env`.  

Você também precisará adicionar uma secret key no arquivo `.env`:

```
TOKEN_SECRET='sua_secret_key_aqui'
```

Execute os comandos abaixo:

```
npm i
npx sequelize db:migrate
npm run dev
```

Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:3001/.

Caso queira migrar para MySQL/MariaDB, edite as configurações de base de dados no arquivo `.env`, configure também o `src/config/database.js`.

Para SQLite as configurações são:

```javascript
require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Para MySQL/MariaDB as configurações são:

```javascript
require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```


Para Postgres as configurações são:

```javascript
require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Perceba que as configurações começando com `process.env.` vem do arquivo `.env`.

Os dados de usuário e senha dos arquivos de seed são:



Você pode obter o token JWT na rota `/tokens`, passando os dados JSON:

```json
{
	"email": "admin@email.com",
	"password": "123456"
}
```

Headers:

```
Content-Type	application/json; charset=utf-8
```


## Documentação da API
### login
### Retorna o token de acesso

```http
  post /tokens/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. seu email |
| `password` | `string` | **Obrigatório**. sua senha |


#### Retorna

| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `token` | o token de acesso |
| `user` |  nome |
| `user` |  email |


##  Parte dos alunos
### Retorna as infos do user

```http
  GET /users/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


### criar user comun

```http
  post /users/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. nome do user |
| `email`      | `string` | **Obrigatório**. email do user |
| `cpf`      | `string` | **Obrigatório**.   cpf do user |
| `cep`      | `string` | **Obrigatório**.  cep do user |
| `bairro`      | `string` | **Obrigatório**.  bairro do user |
| `complement`      | `string` | complemento do user |
| `uf`      | `string` | estado do user |
| `phone`      | `string` | telefone do user |


## Só Admin
### Retorna as infos do user

```http
  GET /Treinadores/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


### criar user comun

```http
  post /Treinadores/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. nome do user |
| `last_name`      | `string` | **Obrigatório**. sobrenome do user |
| `email`      | `string` | **Obrigatório**. email do user |
| `cpf`      | `string` | **Obrigatório**.   cpf do user |
| `cep`      | `string` | **Obrigatório**.  cep do user |
| `bairro`      | `string` | **Obrigatório**.  bairro do user |
| `complement`      | `string` | complemento do user |
| `uf`      | `string` | estado do user |
| `phone`      | `string` | telefone do user |

# prototipok
