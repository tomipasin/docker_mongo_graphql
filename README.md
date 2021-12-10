# API usando Docker, MongoDB, GraphQL, Apollo, NodeJS, Express e ReactJS.
API simples para criar, guardar e ler dados de alunos.
Criados containers docker para o backend e para o frontend além do uso de docker compose para gerenciar os containers.

## Como testar?

Requerimentos para testar:
- Docker
- Docker Compose

Clonar o repositório e executar `docker-compose up`.

* Backend: `http://localhost:5000/graphiql`.
* Frontend: `http://localhost:3000/`

## Queries e Mutations
Atualmente há apenas duas queries (e seus respectivos resolvers): 
* `students`: Lista todos os alunos.
* `student`: Retorna um aluno específico usando o nome como argumento.

Além disso só está implementada a mutation:
* createStudent: Cria um novo aluno.

## Schema
O schema criado é o seguinte:
```graphql
type Student {
    _id: ID!
    nome: String!
    cpf: Float!
    email: String!
    createdAt: String!
  }

  input StudentInput {
    nome: String!
    cpf: Float!
    email: String!
  }

  type Query {
    students: [Student!]!
    student(nome: String!): [Student!]
  }

  type Mutation {
    createStudent(student:StudentInput): Student
  }

  schema {
    query: Query
    mutation: Mutation
  }
```

## Bancos de dados
Nesta implementação estou usando o MongoDB Atlas (nuvem) como banco de dados.
O arquivo `backend/nodemon.json` é o arquivo de configuração do nodemon e precisa ser preenchido com as informações do MongoDB Atlas.
```JSON
{
    "env": {
        "MONGO_USER": "[seu usuário]",
        "MONGO_PASSWORD": "[sua senha]",
        "MONGO_COLLECTION": "[sua coleção]",
        "MONGO_DB": "[seu banco de dados]"
    }
}
```
O arquivo `backend/models/student.js` é o arquivo que contém a implementação do schema para o Mongo.

## Frontend
No front utilizei o Apollo e ReactJS.
* No arquivo `/frontend/src/queries/index.js` está implementada a query students.
* No arquivo `/frontend/src/service/index.js` está instanciado o cliente Apollo para conexão com o backend.

O `/frontend/src/App.js` atua de uma única forma atualmente: Ao ser carregado ele dispara a função do Apollo que faz a requisição para o backend utilizando a query students. Ao receber os dados organiza e renderiza os alunos.

É necessário ainda que implemente um form para consulta e ajuste as queries para aceitarem como argumento tanto o nome quanto o cpf ou email. 


## Stack
* Docker
* Docker Compose
* MongoDB Atlas
* Apollo
* ReactJS
* NodeJS
* Express


