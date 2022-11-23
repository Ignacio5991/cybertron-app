import React from 'react';
import '../estilos/EstilosImagen.css';
import Itemcount from './Itemcount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCartContext } from '../CartContext';
export const ItemDetail = ({ data }) => {
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    addProduct(data, quantity);
    console.log(`compraste ${quantity} unidades`);
  };
  return (
    <div>
      <h1>Mas informacion</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={data.img} alt="image sample" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.categoria}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Itemcount initial={1} stock={data.stock} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
