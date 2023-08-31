import { Loader } from "../components/Loader";
import Home from "../page";

// Definimos el componente Loading
export default function Loading() {
  // Renderizamos un div con la clase de estilos "loading"
  return (
    <Home>
      <Loader />
    </Home>
  );
}
