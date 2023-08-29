"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MeliLogo from "../../public/Assets/Logo_ML@2x.png.png";
import SearchImg from "../../public/Assets/ic_Search@2x.png.png";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./globals.css";
import Link from "next/link";

export default function Home({ children, params }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();
  const [input, setInput] = useState(search || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/items?search=${input}`);
  };

  return (
    <>
      <div className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.search_bar}>
          <Link href="/">
            <Image
              src={MeliLogo}
              alt="logo de mercado libre"
              className={styles.meli_logo}
              priority
            />
          </Link>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nunca dejes de buscar"
            type="text"
            value={input}
            autoFocus
          />
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
      <div className={styles.container}>{children}</div>
    </>
  );
}
