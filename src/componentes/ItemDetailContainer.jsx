import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
const perifericos = { id: 1, image: '', title: 'Placa de video RTX' };
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getdata = new Promise((resolve) => {
      setTimeout(() => {
        resolve(perifericos);
      }, 2000);
    });
    getdata.then((res) => setData(res));
  }, []);
  return <ItemDetail data={data} />;
};
export default ItemDetailContainer;
