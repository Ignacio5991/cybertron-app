import React from 'react';
import { useCartContext } from '../CartContext';
const ItemCart = ({ data }) => {
  const { removeProduct } = useCartContext();
  return (
    <div>
      <p>Titulo:{data.title}</p>
      <p>Cantidad:{data.quantity}</p>
      <p>Precio Unitario:{data.price}</p>
      <p>Precio Total:{data.quantity * data.price}</p>
      <button onClick={() => removeProduct(producto.id)}>Eliminar Producto</button>
    </div>
  );
};
export default ItemCart;
