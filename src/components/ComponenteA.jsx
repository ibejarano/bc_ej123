import React from "react";
import { Contacto } from "../models/contact.class";
import ComponenteB from "./ComponenteB";

const ComponenteA = () => {
  const contacto = new Contacto("Lionel", "Villa", "lvilla@gmail.com", false);

  return (
    <div>
      <ComponenteB contacto={contacto} />
    </div>
  );
};

export default ComponenteA;
