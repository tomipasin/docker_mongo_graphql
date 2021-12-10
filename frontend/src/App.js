import { useQuery } from "@apollo/client";
import STUDENTS from "./queries/index";
import "./App.css";

function App() {
  const { loading, error, data } = useQuery(STUDENTS);
  if (loading) {
    return <p>Carregando...</p>;
  }
  if (error) {
    return <p>Erro. Por favor verifique. </p>;
  }

  return (
    <section className="parent">
        {data.students.map((student, index) => (
          < div className = "card" key = { student.nome } >
          <div className="container">
            <h4>
              <b>{student.nome}</b>
            </h4>
            <p>
              <b>CPF:</b> {student.cpf}
            </p>
            <p>
              <b>Email:</b> {student.email}
            </p>
          </div>
        </div>
      ))}
    </section >
  );
}

export default App;