import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../estilos/Estilosbtn.css';
import { useCartContext } from '../CartContext';
import { Link } from 'react-router-dom';
export const Cartwidgeth = () => {
  const { TotalProducts } = useCartContext();
  return (
    <>
      <Link to="/cart">
        <button className="btn-carrito">
          <ShoppingCartIcon />
          <span>{TotalProducts() || ''}</span>
        </button>
      </Link>
    </>
  );
};
export default Cartwidgeth;
