import React from 'react';
import Cartwidgeth from './Cartwidgdth';
import '../estilos/Estilosnav.css';
import '../estilos/Estilosbtn.css';
export default function Navbar() {
  return (
    <div>
      <ul className="navbarestilos">
        <li>CybetronGaming</li>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        <li>
          <a href="">Noticias</a>
        </li>
        <li>
          <Cartwidgeth />
        </li>
      </ul>
    </div>
  );
}
