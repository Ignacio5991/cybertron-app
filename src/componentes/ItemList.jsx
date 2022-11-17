import { Grid } from '@mui/material';
import React from 'react';
import Item from './Item';
const ItemList = ({ data = [] }) => {
  return data.map((perifericos) => (
    <Grid item md={3} key={perifericos.id}>
      <Item key={perifericos.id} info={perifericos} />
    </Grid>
  ));
};
export default ItemList;
