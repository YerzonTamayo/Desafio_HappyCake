import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contacto() {
  return (
    <div className="contentContacto">
    <div className="titulos">
      <p className="title">Cuentanos, ¿en que te podemos ayudar?</p>
    </div>
    <div className="formulario">
    <Form className='frm'> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Button as="input" type="button" value="Enviar" />{' '}
    </Form>
    </div>
  </div>
  )
}
