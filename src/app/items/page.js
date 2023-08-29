/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Home from "../page";
import styles from "./page.module.css";
import Producto from "./Producto";
import { Loading } from "./Loading";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [cat, setCat] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const url = `https://meli-test-luis.onrender.com/api/${search}`;
      const response = await fetch(url);
      const result = await response.json();
      setProductos(result.splice(0, 4));
      setCat(result.splice(0, 1));
      setLoading(false);
    };
    getProducts();
  }, [search]);

  return (
    <Home>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className={styles.categoria}>
            {cat.map((c, id) => (
              <span key={id}> {c.categories}</span>
            ))}
          </p>
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

export default Page;
