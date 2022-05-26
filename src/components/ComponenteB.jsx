import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contact.class";

const ComponenteB = ({ contacto }) => {
  const [conectado, setConectado] = useState(contacto.conectado);

  const changeState = () => {
    setConectado((prev) => !prev);
  };

  return (
    <div>
      <h1>Contacto</h1>
      <h3>Nombre: {contacto.nombre}</h3>
      <h3>Apellido: {contacto.apellido}</h3>
      <h3>E-mail: {contacto.email}</h3>
      <h3>Contacto {conectado ? "En Línea" : "No disponible"}</h3>
      <button className="button-state" onClick={changeState}>Cambiar estado</button>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;
