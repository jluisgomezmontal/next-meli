// Función para obtener una lista de productos basada en un término de búsqueda
export const getProducts = async ({ search }) => {
  try {
    // Construir la URL de la API utilizando el término de búsqueda
    const url = `https://meli-test-luis.onrender.com/api/${search}`;

    // Realizar una solicitud a la URL
    const response = await fetch(url);

    // Obtener el resultado de la respuesta en formato JSON
    const result = await response.json();

    // Devolver los primeros 4 productos del resultado
    return result.splice(0, 4);
  } catch (error) {
    // Capturar y manejar errores en caso de que algo salga mal
    console.log(error);
  }
};
