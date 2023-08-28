/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Home from "../page";
import styles from "./page.module.css";
import Producto from "./Producto";

const Page = () => {
  const [productos, setProductos] = useState([]);
  const [cat, setCat] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getProducts = async () => {
      const url = `http://localhost:4000/api/${search}`;
      const response = await fetch(url);
      const result = await response.json();
      setProductos(result.splice(0, 4));
      setCat(result.splice(0, 1));
      console.log(cat);
    };
    getProducts();
  }, [search]);

  return (
    <Home>
      <p className={styles.categoria}>
        Categoria:
        {cat.map((c) => (
          <>
            <span> {c.categories}</span>
          </>
        ))}
      </p>
      <div className={styles.container}>
        {productos.map((pro) => (
          <Producto producto={pro} />
        ))}
      </div>
    </Home>
  );
};

export default Page;
