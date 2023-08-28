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
        console.log(producto);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Agregamos itemId como dependencia

  return (
    <Home>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            className={styles.img}
            src={producto.item?.picture}
            width={500}
            height={500}
            alt="imagen de mercado libre"
          />
          <div className={styles.title}>
            <p>{producto.item?.id}</p>
            <p>
              {producto.item?.condition === "new" ? "nuevo" : "usado"}
              <span> - {producto.item?.sold_quantity}</span>
            </p>
            <h2>{producto.item?.title}</h2>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default DescripcionProducto;
