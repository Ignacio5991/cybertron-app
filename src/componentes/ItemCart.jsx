import React from 'react';
import { useCartContext } from '../CartContext';
const ItemCart = ({ producto }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={producto.img} />
      <p>Titulo:{producto.title}</p>
      <p>Cantidad:{producto.quantity}</p>
      <p>Precio Unitario:{producto.price}</p>
      <p>Precio Total:${producto.quantity * producto.price}</p>
      <button onClick={() => removeProduct(producto.id)}>Eliminar Producto</button>
    </div>
  );
};
export default ItemCart;
