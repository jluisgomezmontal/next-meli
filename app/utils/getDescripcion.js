export const getDescripcion = async (IdProducto) => {
  try {
    const url = `https://meli-test-luis.onrender.com/api/items/${IdProducto}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
