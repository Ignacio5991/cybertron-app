import React from 'react';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';
import '../estilos/EstilosCart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, TotalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <p className="menSajecarrito">No hay elementos en el carrito. Que estas esperando para comprar</p>
      </>
    );
  }
  return (
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
      ))}
      <p>Total a pagar:${TotalPrice()}</p>
      <Link to="/Chekout">Finalizar Compra</Link>
    </div>
  );
};
export default Cart;
