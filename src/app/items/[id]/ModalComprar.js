import styles from "./page.module.css";

export const ModalComprar = ({ setModal, producto }) => {
  return (
    <div className={styles.modal}>
      <h2>Resumen de la compra:</h2>
      <br />
      <hr />
      <br />
      <h3>{producto.item?.title}</h3>
      <h3>Pagas: {producto.item?.price.amount}</h3>
      <button className={styles.button} onClick={() => setModal(false)}>
        Cerrar
      </button>
    </div>
  );
};
