import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  
  // States
  const [student, setStudent] = useState({
    name: "",
    last_name: "",
    birth_date: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  //Validators
  function isValidInput(inputText) {
    const letterRegex = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]+$/;
    return letterRegex.test(inputText);
  }

  //Handlers
  const handleChange = (e, objProp) =>
    setStudent({ ...student, [objProp]: e.target.value.trimStart() });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(student);
    if (
      student.name.length > 2 &&
      isValidInput(student.name) &&
      student.last_name.length > 5 &&
      isValidInput(student.last_name)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Carga de Estudiantes</h1>
      {!show && (
        <form className="form-student" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            value={student.name || ""}
            onChange={(e) => handleChange(e, "name")}
            placeholder="Mínimo 3 letras. Sin números ni caracteres epeciales"
          />
          <label>Apellido</label>
          <input
            type="text"
            value={student.last_name || ""}
            onChange={(e) => handleChange(e, "last_name")}
            placeholder="Mínimo 6 letras. Sin números ni caracteres epeciales"
          />
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            value={student.birth_date || ""}
            onChange={(e) => handleChange(e, "birth_date")}
          />
          <button>Registrarse</button>
        </form>
      )}
      {show && (
        <Card student={student}/>
      )}
      {error && (
        <div className="error">
          <h4>Por favor chequea que la información sea correcta</h4>
          <ul>
            <li>El Nombre debe tener al menos 3 caracteres alfabéticos</li>
            <li>El Apellido debe tener al menos 6 caracteres alfabéticos</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
