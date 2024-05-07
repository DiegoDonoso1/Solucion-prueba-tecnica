import React from "react";

export default function User({ user }) {
  return (
    <li>
      <strong>Nombre de Usuario:</strong> {user.nombre_usuario}{" "}
      <strong>ID de Perfil:</strong> {user.id_perfil}{" "}
      <strong>Activo: </strong>
      {user.activo}
    </li>
  );
}
