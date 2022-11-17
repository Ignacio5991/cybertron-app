import { ClassNames } from '@emotion/react';
import React, { useContext } from 'react';
import { useCartContext } from '../../src/CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { perifericos } from '../data/data';
export default function MediaCard({ info }) {
  const { addProduct } = useCartContext();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={info.image} alt="image sample" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.categoria}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/Item/' + info.id}>
          <Button size="small">Mas informacion</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
