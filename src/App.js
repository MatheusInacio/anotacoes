import logo from "./logo.svg";
import "./App.css";
import ListaDeNotas from "./components/lista/lista";
import Formulario from "./components/formulario/formulario";

function App() {
  return (
    <section className="conteudo">
      <Formulario />
      <ListaDeNotas />
    </section>
  );
}

export default App;
