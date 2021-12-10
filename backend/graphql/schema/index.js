const { buildSchema } = require("graphql")

/*
Esquema que define o tipo, query e mutation. 
Para implementar a busca de student por cpf ou email é necessário criar queries correspondentes. 
Falta implementar também mutation para modificação e exclusão de dados.
*/
module.exports = buildSchema(`

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
`)