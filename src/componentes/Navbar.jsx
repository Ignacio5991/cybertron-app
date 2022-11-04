import React from 'react';
import Cartwidgeth from './Cartwidgeth';
import '../estilos/Estilosnav.css';
import '../estilos/Estilosbtn.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <ul className="navbarestilos">
        <li>CybetronGaming</li>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/Nosotros'}>Nosotros</Link>
        </li>
        <li>
          <Link to={'/categoria/Hardware'}>Hardware</Link>
        </li>
        <li>
          <Link to={'/categoria/Teclados'}>Teclados</Link>
        </li>
        <li>
          <Cartwidgeth />
        </li>
      </ul>
    </div>
  );
}
