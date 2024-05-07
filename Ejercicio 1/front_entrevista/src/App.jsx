import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const toggleComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };
  return (
    <>
      <UserForm />
      <button onClick={toggleComponente}>
        Mostrar/Ocultar Listado de usuarios
      </button>
      {mostrarComponente && <UserList />}
    </>
  );
}

export default App;
