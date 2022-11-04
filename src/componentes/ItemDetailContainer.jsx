import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { perifericos } from '../data/data.js';
import Item from './Item';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { iditem } = useParams();
  useEffect(() => {
    const getdata = new Promise((resolve) => {
      setTimeout(() => {
        resolve(perifericos.find((Item) => Item.id == iditem));
      }, 2000);
    });
    getdata.then((res) => setData(res));
  }, [iditem]);
  return <ItemDetail data={data} />;
};
export default ItemDetailContainer;
