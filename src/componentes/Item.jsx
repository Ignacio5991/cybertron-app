import { ClassNames } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ id, title, categoria, info }) => {
  return (
    <>
      <Link to={'/Item/' + id}>
        <img src={info.image} />
      </Link>
      <p>{title}</p>;<p>{categoria}</p>
    </>
  );
};

export default Item;
