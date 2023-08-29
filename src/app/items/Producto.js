import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Precio } from "./Precio";

const Producto = ({ producto }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/items/${producto.items?.id}/descripcion`);
  };
  return (
    <>
      <div onClick={handleClick} id={producto.id} className={styles.card}>
        <Image
          className={styles.img}
          src={producto.items?.picture}
          width={200}
          height={200}
          alt="imagen de mercado libre"
        />
        <div className={styles.info_producto}>
          <Precio
            className={styles.price}
            amount={producto.items?.price.amount}
            car={producto.items?.free_shipping}
          />
          <p className={styles.title}>{producto.items?.title}</p>
        </div>
        <p className={styles.city}>{producto.items?.city}</p>
      </div>
    </>
  );
};

export default Producto;
