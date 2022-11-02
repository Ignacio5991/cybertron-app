import { ClassNames } from '@emotion/react';
import React from 'react';
const Item = ({ info }) => {
  return (
    <a href="">
      <img src={info.image} />
      <p>{info.title}</p>;
    </a>
  );
};
export default Item;
