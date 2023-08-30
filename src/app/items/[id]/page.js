"use client";
// Importamos los módulos y componentes necesarios
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Home from "@/src/app/page";
import { Loading } from "../Loading";
import { ModalComprar } from "./ModalComprar";
import { Precio } from "../Precio";
import styles from "./page.module.css";

// Definimos el componente DescripcionProducto
const DescripcionProducto = () => {
  // Obtenemos la ruta actual con el hook usePathname
  const pathname = usePathname();
  const itemId = pathname.substring(7);
  const url = `https://meli-test-luis.onrender.com/api/items/${itemId}`;
  // Definimos estados para el modal, la carga, y los datos del producto
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);

  // Función para manejar el clic en el botón de comprar
  const handleComprar = () => {
    setModal(true);
  };

  // Efecto que obtiene la descripción del producto al cargar la página
  useEffect(() => {
    const getDescripcion = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false); // Cambiamos el estado de carga
          setProducto(data); // Establecemos los datos del producto
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getDescripcion();
  }, []); // Agregamos itemId como dependencia al efecto

  return (
    // Componente Home que envuelve la página
    <Home>
      {/* Renderizamos el indicador de carga o el contenido */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Renderizamos el modal si modal es verdadero */}
          {modal && <ModalComprar producto={producto} setModal={setModal} />}
          {/* Renderizamos la categoría del producto */}
          <p className={styles.categoria}>
            Categoria: {producto.item?.categoria}
          </p>
          {/* Contenedor principal */}
          <div className={styles.container}>
            {/* Encabezado de la página */}
            <div className={styles.header}>
              {/* Imagen del producto */}
              <Image
                src={producto.item?.picture}
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
                  {producto.item?.condition === "new" ? "Nuevo" : "Usado"}
                  <span> - {producto.item?.sold_quantity} Vendidos</span>
                </p>
                {/* Título del producto */}
                <h2 className={styles.title}>{producto.item?.title}</h2>
                {/* Componente Precio */}
                <Precio
                  className={styles.price}
                  amount={producto.item?.price.amount}
                />
                {/* Botón de comprar */}
                <button onClick={handleComprar} className={styles.button}>
                  Comprar
                </button>
              </div>
            </div>
            {/* Descripción del producto */}
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

export default DescripcionProducto; // Exportamos el componente DescripcionProducto
