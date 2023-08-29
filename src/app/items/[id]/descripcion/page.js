"use client";
import Home from "@/src/app/page";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Loading } from "../../Loading";
import { ModalComprar } from "./ModalComprar";
import { Precio } from "../../Precio";

const DescripcionProducto = () => {
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);
  const match = pathname.match(/\/items\/(.*?)\/descripcion/);
  const itemId = match[1];

  const handleComprar = () => {
    setModal(true);
  };

  useEffect(() => {
    const getDescripcion = async () => {
      const url = `https://meli-test-luis.onrender.com/api/items/${itemId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(true);
          setProducto(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getDescripcion();
  }, []); // Agregamos itemId como dependencia

  return (
    <Home>
      {loading ? (
        <Loading />
      ) : (
        <>
          {modal && <ModalComprar producto={producto} setModal={setModal} />}
          <p className={styles.categoria}>
            Categoria: {producto.item?.categoria}
          </p>
          <div className={styles.container}>
            <div className={styles.header}>
              <Image
                src={producto.item?.picture}
                className={styles.img}
                width={300}
                height={300}
                alt="imagen de mercado libre"
                priority
              />
              <div className={styles.info}>
                <p className={styles.condicion}>
                  {producto.item?.condition === "new" ? "Nuevo" : "Usado"}
                  <span> - {producto.item?.sold_quantity} Vendidos</span>
                </p>
                <h2 className={styles.title}>{producto.item?.title}</h2>
                <Precio
                  className={styles.price}
                  amount={producto.item?.price.amount}
                />
                <button onClick={handleComprar} className={styles.button}>
                  Comprar
                </button>
              </div>
            </div>
            <div className={styles.descripcion}>
              <h3 className={styles.des_title}>Descripcion del Producto</h3>
              <p>{producto.item?.description}</p>
            </div>
          </div>
        </>
      )}
    </Home>
  );
};

export default DescripcionProducto;
