import './App.css';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer greeting={'Bienvenidos a Cybertron'} />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
