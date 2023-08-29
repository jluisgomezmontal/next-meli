import Image from "next/image";
import carImg from "../../../public/Assets/ic_shipping@2x.png.png";
import { useState } from "react";
import styles from "./page.module.css";

export const Precio = ({ amount, car, className }) => {
  const precio = amount;
  const decimos = precio?.toString().slice(-3);
  const unidad = precio?.toString().slice(0, -3);

  return (
    <p className={className}>
      ${precio?.toString().length > 3 ? unidad + "." + decimos : precio}
      {car ? (
        <Image
          src={carImg}
          width={20}
          height={20}
          alt="logo de envio gratis"
          className={styles.free_shipping}
        />
      ) : (
        ""
      )}
    </p>
  );
};
