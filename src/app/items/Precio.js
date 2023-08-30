// Importamos los módulos necesarios
import Image from "next/image";
import styles from "./page.module.css";
// Importamos la imagen de envío
import carImg from "../../../public/Assets/ic_shipping@2x.png.png";

// Definimos el componente Precio
export const Precio = ({ amount, car, className }) => {
  // Extraemos el precio del objeto props
  const precio = amount;
  // Extraemos los últimos tres dígitos del precio como decimales
  const decimos = precio?.toString().slice(-3);
  // Extraemos la parte principal del precio (sin los últimos tres dígitos)
  const unidad = precio?.toString().slice(0, -3);

  return (
    // Renderizamos el precio y la etiqueta de envío si corresponde
    <p className={className}>
      {/* Mostramos el precio formateado */}$
      {precio?.toString().length > 3 ? unidad + "." + decimos : precio}
      {/* Mostramos la etiqueta de envío gratis si es necesario */}
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
