const express = require("express")
const gql = require("express-graphql")
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")
const cors = require("cors")

/*
Uso o express para criar o servidor e o cors para permitir acesso de qualquer lugar. 
Com o pacote express-graphql eu passo o schema e os resolvers para a chamada http.
*/
const app = express()
app.use(cors());
app.use(
    "/graphql",
    gql.graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)

/*
Conexão com o banco de dados MongoDB é feita aqui com o mongoose. 
Em produção separaria a parte de conexão do banco de dados em  um arquivo separado.
*/
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mflix.nopvf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
    .connect(uri, options)
    .then(() => app.listen(5000, console.log("Servidor rodando!")))
    .catch(error => {
        throw error
    })