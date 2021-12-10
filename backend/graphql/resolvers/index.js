const Student = require("../../models/student");

/*
Função para retornar todos os alunos e seus dados. 
Busca o modelo da query students e retorna todos os alunos.
Com este resultado faz um map para retornar um objeto com os dados de cada aluno.
*/
async function students() {
  try {
    const studentsFetched = await Student.find()
    return studentsFetched.map(student => {
      return {
        ...student._doc,
        _id: student.id,
        createdAt: new Date(student._doc.createdAt).toISOString(),
      }
    })
  } catch (error) {
    throw error
  }
}

/*
Função para retornar um aluno específico e seus dados. 
Busca o modelo da query student(nome) e retorna um array com todos os alunos 
com o nome definido como argumento.
Com este resultado faz um map para retornar um objeto com os dados de cada aluno.
*/
async function student(args) {
  console.log(args)
  try {
    const studentFetched = await Student.find(args);
    studentFetched.map(student => {
      const result = {
        ...student._doc,
        _id: student.id,
        createdAt: new Date(student._doc.createdAt).toISOString(),
      }
      return result;
    })
  } catch (error) {
    throw error
  }

}

/*
Função para criar aluno. 
Cria com base no modelo e salva no banco de dados.
*/
async function createStudent(parent, args, context, info) {
  try {
    const { nome, cpf, email } = arguments.student
    const student = new Student({
      nome,
      cpf,
      email
    })
    const newStudent = await student.save()
    return { ...newStudent._doc, _id: newStudent.id }
  } catch (error) {
    throw error
  }

}

module.exports = {
  students,
  student,
  createStudent
}