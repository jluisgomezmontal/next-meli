"use client";
import Home from "@/src/app/page";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const DescripcionProducto = () => {
  const pathname = usePathname();
  const [producto, setProducto] = useState([]);
  const match = pathname.match(/\/items\/(.*?)\/descripcion/);
  const itemId = match[1];

  useEffect(() => {
    const url = `http://localhost:4000/api/items/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [itemId]); // Agregamos itemId como dependencia

  return (
    <Home>
      <p className={styles.categoria}>Categoria: {producto.item?.categoria}</p>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src={producto.item?.picture}
            className={styles.img}
            width={500}
            height={500}
            alt="imagen de mercado libre"
            priority
          />
          <div className={styles.info}>
            <p className={styles.condicion}>
              {producto.item?.condition === "new" ? "Nuevo" : "Usado"}
              <span> - {producto.item?.sold_quantity} Vendidos</span>
            </p>
            <h2 className={styles.title}>{producto.item?.title}</h2>
            <h2 className={styles.price}>$ {producto.item?.price.amount}</h2>
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        <div className={styles.descripcion}>
          <h3 className={styles.des_title}>Descripcion del Producto</h3>
          <p>{producto.item?.description}</p>
        </div>
      </div>
    </Home>
  );
};

export default DescripcionProducto;
