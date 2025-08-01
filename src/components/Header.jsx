import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.cart.totalItems);
  return (
    <header className="flex justify-between items-center p-4 bg-green-100">
      <h1 className="text-xl font-bold">Plantify</h1>
      <nav className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;