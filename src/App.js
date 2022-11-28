import './App.css';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import { PacmanLoader } from 'react-spinners';
import CartProvider from './CartContext';
import Cart from './componentes/Cart';
import Chekout from './componentes/Chekout';
import { useState } from 'react';
function App() {
  const [loading] = useState(true);
  return (
    <div>
      <PacmanLoader color="rgb 128, 36,123" loading={loading} />
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Itemlistcontainer />} />
            <Route path="/Item/:iditem" element={<ItemDetailContainer />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/categoria/:idcategoria" element={<Itemlistcontainer />} />
            <Route path="/chekout" element={<Chekout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
