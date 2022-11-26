import React, { useState } from 'react';
import '../estilos/EstilosTitulos.css';
import '../estilos/EstilosCheckout.css';
import '../estilos/Estilosbtn.css';
import { useCartContext } from '../CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
export default function Chekout() {
  const { TotalPrice, cart } = useCartContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [orderId, setOrderId] = useState('');
  function terminarCompra() {
    let factura = {
      comprador: { name, email, tel },
      total: TotalPrice(),
      cart,
    };
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');
    addDoc(pedidos, factura).then(({ id }) => {
      setOrderId(id);
    });
  }
  console.log(name, email, tel);
  return (
    <>
      {orderId ? 'Gracias por elegirnos. Tu id de compra es:' + orderId : ''}
      <div className="fOrm">
        <h1 className="datosComprador">Ingrese los datos para procesar la compra</h1>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <br></br>
        <input type="tel" placeholder="tel" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input type="email" placholder="email" onChange={(e) => setTel(e.target.value)} />
        <br></br>
        <button className="pEdido" onClick={terminarCompra}>
          Enviar Pedido
        </button>
      </div>
    </>
  );
}
