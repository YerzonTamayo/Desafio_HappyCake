import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = () => {
  return (
    <Navbar expand="" bg="dark" variant="dark">
    <Container className="justify-content-start">
      <Link to="/" className="text-white ms-3 text-decoration-none">
        Home
      </Link>
      <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
        Contacto
      </Link>
    </Container>
  </Navbar>
  );
};
export default Navegacion;
