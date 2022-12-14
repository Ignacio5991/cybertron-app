import React, { useState, useEffect } from 'react';
import '../estilos/EstilosTitulos.css';
import '../estilos/EstiloLoading.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Grid } from '@mui/material';
import { PacmanLoader } from 'react-spinners';
export default function Itemlistcontainer() {
  const [data, setData] = useState([]);
  const { idcategoria } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const Collection1 = collection(db, 'productos');
    if (idcategoria) {
      const Filter = query(Collection1, where('categoria', '==', idcategoria));
      getDocs(Filter).then((res) => setData(res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))));
    } else {
      getDocs(Collection1).then((res) => setData(res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))));
    }
  }, [idcategoria]);
  return (
    <div>
      {!data.length && <PacmanLoader color="#7B42F1" className="pAcman" spacing={2} />}
      <Grid container justify="center">
        <ItemList data={data} />
      </Grid>
    </div>
  );
}
