// Importamos los módulos y componentes necesarios
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Precio } from "./Precio";

// Definimos el componente Producto
const Producto = ({ producto }) => {
  // Obtenemos el enrutador de Next.js
  const router = useRouter();

  // Función para manejar el clic en el producto
  const handleClick = (e) => {
    e.preventDefault();
    // Navegamos a la página de descripción del producto
    router.push(`/items/${producto.items?.id}`);
  };

  return (
    <>
      {/* Contenedor del producto con manejador de clic */}
      <div onClick={handleClick} id={producto.id} className={styles.card}>
        {/* Imagen del producto */}
        <Image
          className={styles.img}
          src={producto.items?.picture}
          width={200}
          height={200}
          alt="imagen de mercado libre"
        />
        <div className={styles.info_producto}>
          {/* Componente Precio */}
          <Precio
            className={styles.price}
            amount={producto.items?.price.amount}
            car={producto.items?.free_shipping}
          />
          <p className={styles.title}>{producto.items?.title}</p>
        </div>
        {/* Ciudad del producto */}
        <p className={styles.city}>{producto.items?.city}</p>
      </div>
    </>
  );
};

export default Producto; // Exportamos el componente Producto
