import React from 'react';
import '../estilos/EstilosTitulos.css';
export default function Itemlistcontainer({ greeting }) {
  return (
    <div>
      <h1 className="Titulos">{greeting}</h1> //* Aca podemos usar las props que nos llegan de esta manera!
    </div>
  );
}
