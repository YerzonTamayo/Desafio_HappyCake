import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Navegacion from "./components/Navegacion";
import NotFount from "./views/NotFount";

function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NotFount />}/>
      </Routes>
    </>
  );
}
export default App;
