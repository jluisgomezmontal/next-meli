export const getProducts = async ({ search }) => {
  try {
    const url = `https://meli-test-luis.onrender.com/api/${search}`;
    const response = await fetch(url);
    const result = await response.json();

    return result.splice(0, 4);
    // setCat(result.splice(0, 1));
  } catch (error) {
    console.log(error);
  }
};
