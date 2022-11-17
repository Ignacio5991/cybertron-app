import React from 'react';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
const Cart = () => {
  const { Cart, TotalPrice } = useCartContext();
  if (Cart.length === 0) {
    return <>No hay elementos en el carrito. Que estas esperando para comprar</>;
  }
  return (
    <div>
      {Cart.map((product) => (
        <ItemCart key={prodcut.id} product={product} />
      ))}
    </div>
  );
};
