import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <div className="mt-4">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalPrice.toFixed(2)}</p>
        <button className="mt-2 px-4 py-2 bg-gray-300">Checkout (Coming Soon)</button>
        <Link to="/products" className="ml-4 text-blue-600">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;