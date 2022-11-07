import React from 'react';
import '../estilos/EstilosImagen.css';
export const ItemDetail = ({ data }) => {
  return (
    <div>
      <h1>Mas informacion</h1>
      <p>{data.title}</p>
      <img src={data.image}></img>;<p>{data.categoria}</p>;<p>{data.price}</p>
    </div>
  );
};
export default ItemDetail;
