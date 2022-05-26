import React, { Component } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contact.class";

class ComponenteA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edad: 17,
    };
  }

  render() {
    return (
      <div>
        <h1>Contacto</h1>
        <h3>Nombre: {this.props.contacto.nombre}</h3>
        <h3>Apellido: {this.props.contacto.apellido}</h3>
        <h3>E-mail: {this.props.contacto.email}</h3>
        <h3>
          Contacto{" "}
          {this.props.contacto.conectado ? "En Línea" : "No disponible"}
        </h3>
      </div>
    );
  }
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteA;
