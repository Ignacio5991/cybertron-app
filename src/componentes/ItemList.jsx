import React from 'react';
import Item from './Item';
const ItemList = ({ data = [] }) => {
  return data.map((perifericos) => <Item key={perifericos.id} info={perifericos} />);
};
export default ItemList;