"use client";
// Importamos módulos y componentes necesarios
import Image from "next/image";
import styles from "./page.module.css";
import MeliLogo from "../../public/Assets/Logo_ML@2x.png.png";
import SearchImg from "../../public/Assets/ic_Search@2x.png.png";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./globals.css";
import Link from "next/link";

// Componente Home que representa la página principal
export default function Home({ children, params }) {
  // Obtenemos los parámetros de búsqueda de la URL
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Obtenemos el enrutador de Next.js
  const router = useRouter();

  // Estado para manejar el valor del input de búsqueda
  const [input, setInput] = useState(search || "");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/items?search=${input}`);
  };

  return (
    <>
      {/* Encabezado de la página */}
      <div className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.search_bar}>
          {/* Enlace al inicio */}
          <Link href="/">
            <Image
              src={MeliLogo}
              alt="logo de mercado libre"
              className={styles.meli_logo}
              priority
            />
          </Link>
          {/* Input de búsqueda */}
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nunca dejes de buscar"
            type="text"
            value={input}
            autoFocus
          />
          {/* Icono de búsqueda */}
          <div className={styles.search_icon}>
            <Image
              className={styles.search_img}
              src={SearchImg}
              alt="icono de search de mercado libre"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      {/* Contenedor principal */}
      <div className={styles.container}>{children}</div>
    </>
  );
}
