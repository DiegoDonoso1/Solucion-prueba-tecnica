const BASE_URL = "http://localhost:8000/api"; // Cambia la URL según corresponda

export const getPerfiles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/perfiles`);
    if (!response.ok) {
      throw new Error("No se pudieron obtener los perfiles");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error al obtener los perfiles: " + error.message);
  }
};
