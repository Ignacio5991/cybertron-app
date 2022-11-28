import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../estilos/Estilosbtn.css';
import '../estilos/EstilosFooter.css';
export default function Footer() {
  const towsp = () => {
    window.open('https://wa.me/5493416293342');
  };
  return (
    <div className="estiloFooter">
      <button onClick={towsp} className="btn-contacto">
        <WhatsAppIcon />
      </button>
      <p className="textoFooter">Cybertrongaming Marca registrada</p>
    </div>
  );
}
