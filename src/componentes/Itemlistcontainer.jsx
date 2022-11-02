import React, { useState, useEffect } from 'react';
import '../estilos/EstilosTitulos.css';
import Itemcount from './Itemcount';
import ItemList from './ItemList';
export default function Itemlistcontainer(greeting) {
  const perifericos = [
    { id: 1, image: '', title: 'Placa de video RTX' },
    { id: 2, image: '', title: 'Mother Gygabite' },
    { id: 3, image: '', title: 'Teclado Corsair' },
    { id: 4, imgage: '', title: 'Teclado Apex' },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = new Promise((resolve) => {
      setTimeout(() => {
        resolve(perifericos);
      }, 2000);
    });
    getdata.then((res) => setData(res));
  }, []);
  const onAdd = (quantity) => {
    console.log(`compraste {$quantity} unidades`);
  };
  return (
    <div>
      <h1 className="Titulos">Bienvenidos a Cybertron</h1>
      <Itemcount initial={1} stock={4} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  );
}
