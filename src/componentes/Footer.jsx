import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../estilos/Estilosbtn.css';
import '../estilos/EstilosFooter.css';
export default function Footer() {
  return (
    <div className="estiloFooter">
      <button className="btn-contacto">
        <WhatsAppIcon />
      </button>
      <p className="textoFooter">Cybertrongaming Marca registrada</p>
    </div>
  );
}
