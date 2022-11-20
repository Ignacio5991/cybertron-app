import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

import '../estilos/EstilosImagen.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Item from './Item';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { iditem } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const Doc = doc(db, 'productos', iditem);
    getDoc(Doc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [iditem]);

  return <ItemDetail data={data} />;
};
export default ItemDetailContainer;
