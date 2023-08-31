// Importamos los módulos y componentes necesarios
import { Precio } from "@/app/components/Precio";
import styles from "./page.module.css";
import Image from "next/image";
import Home from "@/app/page";
import { getDescripcion } from "@/app/utils/getDescripcion";

// Definición del componente asíncrono
const IdProducto = async ({ params }) => {
  // Obtener la descripción del producto usando la función getDescripcion
  const producto = await getDescripcion(params.idProducto);

  return (
    <Home>
      {/* Establecer el título de la página con el título del producto */}
      <title>{producto.item.title}</title>

      {/* Mostrar la categoría del producto */}
      <p className={styles.categoria}>Categoria: {producto.item.categoria}</p>

      {/* Contenedor principal */}
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Mostrar la imagen del producto */}
          <Image
            src={producto.item.picture}
            className={styles.img}
            width={300}
            height={300}
            alt="imagen de mercado libre"
            priority
          />
          <div className={styles.info}>
            {/* Mostrar condición del producto y cantidad vendida */}
            <p className={styles.condicion}>
              {producto.item.condition === "new" ? "Nuevo" : "Usado"}
              <span> - {producto.item.sold_quantity} Vendidos</span>
            </p>
            {/* Mostrar título del producto */}
            <h2 className={styles.title}>{producto.item.title}</h2>
            {/* Mostrar precio usando el componente Precio */}
            <Precio styles={styles} amount={producto.item.price.amount} />
            {/* Botón de compra */}
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        <div className={styles.descripcion}>
          {/* Mostrar la descripción del producto */}
          <h3 className={styles.des_title}>Descripcion del Producto</h3>
          <p>{producto.item.description}</p>
        </div>
      </div>
    </Home>
  );
};

export default IdProducto;
