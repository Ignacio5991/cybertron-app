import React, { useState } from 'react';
import '../estilos/EstilosTitulos.css';
import '../estilos/EstilosCheckout.css';
import '../estilos/Estilosbtn.css';
import { useCartContext } from '../CartContext';
import swal from 'sweetalert2';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
export default function Chekout() {
  const { TotalPrice, cart, CleanCart } = useCartContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [orderId] = useState('');
  function validarEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
      swal.fire({
        title: 'Invalid email format',
        text: 'Example: name@gmail.com',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      });
      return false;
    }
    return true;
  }

  function validarTelefono(tel) {
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (reg.test(tel) == false) {
      swal.fire({
        title: 'Invalid phone number format',
        text: ' Area code without 0 and your number,expl: 1155555555 ',
        icon: 'warning',
        button: 'cerrar',
      });
      return false;
    }
    return true;
  }

  const order = {
    buyer: {
      name,
      email,
      tel,
    },
    items: cart.map((productos) => ({
      id: productos.id,
      title: productos.title,
      price: productos.price,
      quantity: productos.quantity,
    })),
    total: TotalPrice(),
  };

  const terminarCompra = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'pedidos');

    if (TotalPrice() == 0) {
      swal({
        title: 'Empty cart',
        icon: 'info',
        text: 'Go to  PRODUCTS  to continue viewing our products',
      });
      return;
    }
    if (!name || !email || !tel) {
      swal.fire({
        title: 'Incomplete',
        text: 'complete el campo faltante',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      });
      return;
    }

    if (validarEmail(email) == false) {
      return;
    }

    if (validarTelefono(tel) == false) {
      return;
    }
    addDoc(ordersCollection, order).then(
      ({ id }) =>
        swal.fire({
          icon: 'success',
          title: 'La compra se  realizo con exito',
          text: 'Nos estaremos comunicando por email,su codigo de compra es : ' + id,
        }),
      CleanCart()
    );
  };
  return (
    <>
      {orderId ? 'Gracias por elegirnos. Tu id de compra es:' + orderId : ''}
      <div className="fOrm">
        <h1 className="datosComprador">Ingrese los datos para procesar la compra</h1>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <br></br>
        <input type="tel" placeholder="tel" onChange={(e) => setTel(e.target.value)} />
        <br></br>
        <input type="email" placholder="email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <button className="pEdido" onClick={terminarCompra}>
          Enviar Pedido
        </button>
      </div>
    </>
  );
}
