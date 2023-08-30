"use client";
// Importamos los módulos y componentes necesarios
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Home from "../page";
import styles from "./page.module.css";
import Producto from "./Producto";
import { Loading } from "./Loading";

// Definimos el componente Page
const Page = () => {
  // Estados para manejar la carga, los productos y la categoría
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [cat, setCat] = useState([]);

  // Obtenemos los parámetros de búsqueda de la URL
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Efecto para obtener los productos al cargar la página
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const url = `https://meli-test-luis.onrender.com/api/${search}`;
      const response = await fetch(url);
      const result = await response.json();

      // Extraemos los primeros productos y la categoría del resultado
      setProductos(result.splice(0, 4));
      setCat(result.splice(0, 1));
      setLoading(false);
    };
    getProducts();
  }, [search]);

  return (
    // Componente Home que envuelve la página
    <Home>
      {/* Renderizamos un indicador de carga o el contenido */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Renderizamos la categoría */}
          <p className={styles.categoria}>
            {cat.map((c, id) => (
              <span key={id}> {c.categories}</span>
            ))}
          </p>
          {/* Renderizamos los productos */}
          <div className={styles.container}>
            {productos.map((pro, id) => (
              <Producto key={id} producto={pro} cat={cat} />
            ))}
          </div>
        </>
      )}
    </Home>
  );
};

export default Page; // Exportamos el componente Page
