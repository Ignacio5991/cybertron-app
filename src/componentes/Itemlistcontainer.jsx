import React, { useState, useEffect } from 'react';
import '../estilos/EstilosTitulos.css';
import Itemcount from './Itemcount';
import ItemList from './ItemList';
import { perifericos } from '../data/data.js';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { Grid } from '@mui/material';
export default function Itemlistcontainer() {
  const [data, setData] = useState([]);
  const { idcategoria } = useParams();
  useEffect(() => {
    const getdata = new Promise((resolve) => {
      setTimeout(() => {
        resolve(perifericos);
      }, 2000);
    });
    getdata.then((res) => {
      if (idcategoria) {
        setData(res.filter((Item) => Item.categoria == idcategoria));
      } else {
        setData(res);
      }
    });
  }, [idcategoria]);
  return (
    <div>
      <Grid container justify="center">
        <ItemList data={data} />
      </Grid>
    </div>
  );
}
