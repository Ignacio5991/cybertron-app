import React, { useState, useEffect } from 'react';
import '../estilos/EstilosTitulos.css';
import Itemcount from './Itemcount';
import ItemList from './ItemList';
import PlacaVideo from '../imagenes/390gtx.jpg';
import MotherGygabite from '../imagenes/motheraourus.jpg';
import TecladoCorsair from '../imagenes/corsair68.jpg';
import TecladoApex from '../imagenes/apex100.jpg';
export default function Itemlistcontainer(greeting) {
  const perifericos = [
    { id: 1, image: PlacaVideo, title: 'Placa de video RTX' },
    { id: 2, image: MotherGygabite, title: 'Mother Gygabite' },
    { id: 3, image: TecladoCorsair, title: 'Teclado Corsair' },
    { id: 4, image: TecladoApex, title: 'Teclado Apex' },
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
