import { useParams } from "next/navigation";
import Producto from "../components/Producto";
import Home from "../page";
import styles from "./page.module.css";
import { Loader } from "../components/Loader";
import { getProducts } from "../utils/getProducts";

// Importamos los módulos y componentes necesarios

const Page = async ({ searchParams }) => {
  const productos = await getProducts(searchParams);

  const categoria = productos[0].categories;
  return (
    <Home>
      <title>{searchParams.search + " | meli"}</title>

      {/* Renderizamos los productos */}
      <p className={styles.categoria}>Categoria: {categoria}</p>
      <div className={styles.container}>
        {productos.map((pro, id) => (
          <Producto styles={styles} key={id} producto={pro} />
        ))}
      </div>
    </Home>
  );
};

export default Page;
