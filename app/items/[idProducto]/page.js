import { Precio } from "@/app/components/Precio";
import styles from "./page.module.css";
import Image from "next/image";
import Home from "@/app/page";
import { getDescripcion } from "@/app/utils/getDescripcion";

const IdProducto = async ({ params }) => {
  const producto = await getDescripcion(params.idProducto);
  return (
    <Home>
      <title>{producto.item.title}</title>

      <p className={styles.categoria}>Categoria: {producto.item.categoria}</p>
      <div className={styles.container}>
        {/* Encabezado de la página */}
        <div className={styles.header}>
          {/* Imagen del producto */}
          <Image
            src={producto.item.picture}
            className={styles.img}
            width={300}
            height={300}
            alt="imagen de mercado libre"
            priority
          />
          {/* Información del producto */}
          <div className={styles.info}>
            {/* Condición y cantidad vendida del producto */}
            <p className={styles.condicion}>
              {producto.item.condition === "new" ? "Nuevo" : "Usado"}
              <span> - {producto.item.sold_quantity} Vendidos</span>
            </p>
            {/* Título del producto */}
            <h2 className={styles.title}>{producto.item.title}</h2>
            {/* Componente Precio */}
            <Precio styles={styles} amount={producto.item.price.amount} />
            {/* Botón de comprar */}
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        {/* Descripción del producto */}
        <div className={styles.descripcion}>
          <h3 className={styles.des_title}>Descripcion del Producto</h3>
          <p>{producto.item.description}</p>
        </div>
      </div>
    </Home>
  );
};

export default IdProducto;
