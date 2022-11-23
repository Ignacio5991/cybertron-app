import React, { useState, useContext } from 'react';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
export default function Chekout() {
  const { Totalprice, cart } = useContext;
  const { name, setName } = useState('');
  const { email, setEmail } = useState('');
  const { tel, setTel } = useState('');
  const { orderId, setOrderId } = useState('');
  function terminarCompra() {
    const factura = {
      comprador: { name, email, tel },
      Totalprice,
      cart,
    };
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');
    addDoc(pedidos, factura).then(({ id }) => {
      setOrderId(id);
    });
  }

  return (
    <>
      {orderId ? 'Gracias por elegirnos. Tu id de compra es:' + orderId : ''}
      <div>
        <h1>Ingrese los datos para procesar la compra</h1>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <br></br>
        <input type="tel" placeholder="tel" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input type="email" placholder="email" onChange={(e) => setTel(e.target.value)} />
        <br></br>
        <button onClick={terminarCompra}>Enviar Pedido</button>
      </div>
    </>
  );
}
