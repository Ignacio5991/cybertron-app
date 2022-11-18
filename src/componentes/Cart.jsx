import React from 'react';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
const Cart = () => {
  const { cart, TotalPrice } = useCartContext();
  if (cart.length === 0) {
    return <>No hay elementos en el carrito. Que estas esperando para comprar</>;
  }
  return (
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
      ))}
      <p>Total a pagar:${TotalPrice()}</p>
    </div>
  );
};
export default Cart;
