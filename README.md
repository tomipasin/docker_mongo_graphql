# API usando Docker, MongoDB, GraphQL, NodeJS, Express e ReactJS.
API simples para criar, guardar e ler dados de alunos.
Criados containers docker para o backend e para o frontend além do uso de docker compose para gerenciar os containers.

## Como testar?
Clonar o repositório e executar `docker-compose up`.
O backend roda na porta 5000 e o frontend na porta 3000.
Para acessar o GraphiQL, acesse http://localhost:5000/graphiql.

## Queries e Mutations
Atualmente há apenas uma query para listar todos os alunos e outra para buscar por nome. 
Além disso só está implementada a mutation para criar um novo aluno.



