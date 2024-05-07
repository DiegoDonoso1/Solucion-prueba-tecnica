import { useState, useEffect } from "react";
import { createUser } from "../services/UserService";
import { getPerfiles } from "../services/PerfilService";
import * as validations from "../utils/validations";

function UserForm() {
  const [perfiles, setPerfiles] = useState([]);
  const [formData, setFormData] = useState({
    nombre_usuario: "",
    password: "",
    id_perfil: "",
    fecha_nacimiento: "",
  });

  useEffect(() => {
    async function fetchPerfiles() {
      try {
        const response = await getPerfiles();
        setPerfiles(response);
      } catch (error) {
        console.error("Error al obtener los perfiles:", error.message);
      }
    }
    fetchPerfiles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre_usuario, password, id_perfil, fecha_nacimiento } = formData;
    if (!validations.validateProfile(id_perfil)) {
      alert("Por favor, selecciona un perfil");
      return;
    }

    if (!validations.validateUsername(nombre_usuario)) {
      alert("Nombre de usuario inválido");
      return;
    }

    if (!validations.validatePassword(password)) {
      alert("Contraseña inválida");
      return;
    }

    if (!validations.isValidDate(fecha_nacimiento)) {
      alert("Selecciona una fecha valida");
      return;
    }

    try {
      await createUser(formData);
      alert("Usuario creado exitosamente");
      // Puedes agregar aquí cualquier otra lógica después de crear el usuario
      // Por ejemplo, redirigir al usuario a otra página
    } catch (error) {
      console.error(error);
      alert(`Hubo un error al crear el usuario: ` + error);
    }
  };
  return (
    <div className="form-container">
  <h2>Registrar Nuevo Usuario</h2>
  <form className="user-form" onSubmit={handleSubmit} noValidate>
    <div className="form-group">
      <label htmlFor="nombre_usuario">Nombre de Usuario:</label>
      <input
        type="text"
        id="nombre_usuario"
        name="nombre_usuario"
        value={formData.nombre_usuario}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="id_perfil">Perfil:</label>
      <select id="id_perfil" name="id_perfil" onChange={handleChange}>
        <option value="">Selecciona un perfil</option>
        {perfiles.map((perfil) => (
          <option key={perfil.id_perfil} value={perfil.id_perfil}>
            {perfil.nombre_perfil}
          </option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
      <input
        type="date"
        id="fecha_nacimiento"
        name="fecha_nacimiento"
        value={formData.fecha_nacimiento}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit">Registrar Usuario</button>
  </form>
</div>
  );
}

export default UserForm;
