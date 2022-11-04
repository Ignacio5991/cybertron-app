import './App.css';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Itemlistcontainer />} />
          <Route path="/Item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/categoria/:idcategoria" element={<Itemlistcontainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
