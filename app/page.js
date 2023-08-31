"use client";
// Importamos los módulos y componentes necesarios
import Image from "next/image";
import styles from "./page.module.css";
import MeliLogo from "../public/Assets/Logo_ML@2x.png.png";
import SearchImg from "../public/Assets/ic_Search@2x.png.png";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home({ children }) {
  // Obtener los parámetros de búsqueda de la URL
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Estado para almacenar el valor del input de búsqueda
  const [input, setInput] = useState(search || "");

  // Obtener el objeto router para navegar a otras páginas
  const router = useRouter();

  // Función para manejar el envío del formulario de búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a la página de items con el parámetro de búsqueda
    router.push(`/items?search=${input}`);
  };

  return (
    <>
      <div className={styles.header}>
        {/* Enlace al inicio */}
        <Link href="/">
          <Image
            src={MeliLogo}
            alt="logo de mercado libre"
            className={styles.meli_logo}
          />
        </Link>
        {/* Formulario de búsqueda */}
        <form onSubmit={handleSubmit} className={styles.search_bar}>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nunca dejes de buscar"
            type="text"
            value={input}
            autoFocus
          />
          <div className={styles.search_icon}>
            {/* Icono de búsqueda que ejecuta la función handleSubmit */}
            <Image
              className={styles.search_img}
              src={SearchImg}
              alt="icono de search de mercado libre"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      {/* Contenedor de los elementos hijos */}
      <div className={styles.container}>{children}</div>
    </>
  );
}
