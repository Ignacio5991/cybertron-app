import { ClassNames } from '@emotion/react';
import React from 'react';
import '../estilos/EstilosImagen.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item = ({ id, title, categoria, info, precio }) => {
  return (
    <>
      <Link to={'/Item/' + id}>
        <img src={info.image} className="imagen-producto" />
      </Link>
      <p>{title}</p>;<p>{categoria}</p>;<p>{precio}</p>
    </>
  );
};

export default Item;
