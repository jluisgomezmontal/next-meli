// Importamos el módulo de estilos "loader.module.scss"
import loader from "./loader.module.scss";

// Definimos el componente Loading
export const Loading = () => {
  // Renderizamos un div con la clase de estilos "loading"
  return <div className={loader.loading}></div>;
};
