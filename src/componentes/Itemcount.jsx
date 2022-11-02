import React, { useState } from 'react';
export const Itemcount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <spam>{count}</spam>
      <button disabled={count >= stock} onClick={increase}>
        +
      </button>
      <div>
        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};
export default Itemcount;
