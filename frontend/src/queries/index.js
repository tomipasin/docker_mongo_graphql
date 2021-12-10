import { gql } from "@apollo/client";

const STUDENTS = gql`
query {
  students {
      nome
      cpf
      email
    }
  }`;
  
export default STUDENTS;