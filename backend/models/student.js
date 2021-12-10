const mongoose = require("mongoose")
const Schema = mongoose.Schema

/*
Para esta API uso o Mongo Atlas como banco de dados.
Aqui defino o schema do objeto Student.
*/
const studentSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },

    cpf: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Student", studentSchema)