import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('chango')) || []);
  /*Funcion Para Agregar al Carrito */
  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  /*Funcion que mostrara el precio total */
  const TotalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  /*Funcion para mostrar el total de productos */
  const TotalProducts = () => cart.reduce((Acomulador, ProductoActual) => Acomulador + ProductoActual.quantity, 0);

  useEffect(() => {
    localStorage.setItem('chango', JSON.stringify(cart));
  }, [cart]);
  /*Funcion Para vaciar el Carrito */
  const CleanCart = () => setCart([]);

  /*Funcion para ver/saber si un producto se encruntra en el carrito */
  const isInCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
  };

  /*Funcion para eliminar un producto del carrito */
  const removeProduct = (id) => setCart(cart.filter((producto) => producto.id !== id));

  return (
    <>
      {' '}
      <CartContext.Provider value={{ CleanCart, isInCart, removeProduct, TotalPrice, TotalProducts, addProduct }}>{children}</CartContext.Provider>
    </>
  );
};
export default CartProvider;
