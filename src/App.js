import './App.css';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import CartProvider from './CartContext';
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
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
