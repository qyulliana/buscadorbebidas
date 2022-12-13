import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Form} from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas/index";
import {CategoriasProvider} from "./context/CategoriasProvider";
import {BebidasProvider} from "./context/BebidasProvider.js";
import ModalBebida from "./components/ModalBebida";


function App() {
  return (
    <div>
      <CategoriasProvider>
      <BebidasProvider>
      <header className={"py-5"}>
        <h1>
        BUSCADOR
        </h1>

      </header>

      <Container className={"mt-5"}>
        <Formulario/>
        <ListadoBebidas/>
        <ModalBebida/>
      </Container>
      </BebidasProvider>
      </CategoriasProvider>

    </div>
  );
}

export default App;
