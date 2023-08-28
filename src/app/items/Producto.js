import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import carImg from "../../../public/Assets/ic_shipping@2x.png.png";
import { useRouter, useSearchParams } from "next/navigation";

const Producto = ({ producto }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/items/${producto.items.id}/descripcion`);
  };
  return (
    <>
      <div onClick={handleClick} id={producto.id} className={styles.card}>
        <Image
          className={styles.img}
          src={producto.items.picture}
          width={250}
          height={250}
          alt="imagen de mercado libre"
        />
        <div className={styles.info_producto}>
          <p className={styles.price}>
            $ {producto.items.price.amount}
            {producto.items.free_shipping ? (
              <Image
                src={carImg}
                width={20}
                height={20}
                alt="logo de envio gratis"
                className={styles.free_shipping}
              />
            ) : (
              ""
            )}
          </p>
          <p className={styles.title}>{producto.items.title}</p>
        </div>
        <p className={styles.city}>{producto.items.city}</p>
      </div>
    </>
  );
};

export default Producto;
