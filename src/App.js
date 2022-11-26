import './App.css';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import CartProvider from './CartContext';
import Cartwidgeth from './componentes/Cartwidgeth';
import { PacmanLoader } from 'react-spinners';
import Cart from './componentes/Cart';
import Chekout from './componentes/Chekout';
function App() {
  return (
    <div>
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
          <PacmanLoader color="rgb(128, 36,123  )" />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
