const BASE_URL = "http://localhost:8000/api"; // Cambia la URL según corresponda

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/usuarios`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de usuarios");
  }
  const data = await response.json();
  return data;
}

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje recibido del backend
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    // Si la respuesta es exitosa, retornamos los datos recibidos del backend
    return await response.json();
  } catch (error) {
    throw new Error("Error al crear el usuario: " + error.message);
  }
};
