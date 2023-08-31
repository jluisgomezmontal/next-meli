// Importamos los módulos y componentes necesarios
import Producto from "../components/Producto";
import Home from "../page";
import styles from "./page.module.css";
import { getProducts } from "../utils/getProducts";

// Definición de un componente asíncrono
const Page = async ({ searchParams }) => {
  // Obtener productos mediante la función getProducts
  const productos = await getProducts(searchParams);

  // Obtener la categoría del primer producto
  const categoria = productos[0].categories;

  return (
    <Home>
      {/* Establecer el título de la página */}
      <title>{searchParams.search + " | meli"}</title>

      {/* Mostrar la categoría */}
      <p className={styles.categoria}>Categoria: {categoria}</p>

      {/* Contenedor de productos */}
      <div className={styles.container}>
        {/* Mapear y renderizar cada producto */}
        {productos.map((pro, id) => (
          <Producto styles={styles} key={id} producto={pro} />
        ))}
      </div>
    </Home>
  );
};

export default Page;
