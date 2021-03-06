import React from "react";
import "./carta.css";

const Carta = ({ img, name, descripcion, tipo }) => {
  return (
    <div className="carta">
      <div className="img">
        <img src={img} alt="foto" />
      </div>
      <div className="titulo">
        <h1>{name}</h1>
        <p>Tipo: {tipo}</p>
        <p>Descripcion:{descripcion}</p>
      </div>
    </div>
  );
};

export default Carta;
