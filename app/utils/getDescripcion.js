// Función para obtener la descripción de un producto utilizando su ID
export const getDescripcion = async (IdProducto) => {
  try {
    // Construir la URL de la API utilizando el ID del producto
    const url = `https://meli-test-luis.onrender.com/api/items/${IdProducto}`;

    // Realizar una solicitud a la URL
    const response = await fetch(url);

    // Obtener el resultado de la respuesta en formato JSON
    const result = await response.json();

    // Devolver el resultado, que probablemente incluye información del producto
    return result;
  } catch (error) {
    // Capturar y manejar errores en caso de que algo salga mal
    console.log(error);
  }
};
