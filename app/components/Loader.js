// Importamos el módulo de estilos "loader.module.scss"
import loader from "./loader.module.scss";

// Definimos el componente Loader
export const Loader = () => {
  // Renderizamos un div con la clase de estilos "Loader"
  return <div className={loader.loader}></div>;
};
