import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <img src={item.image} alt={item.name} className="w-16 h-16" />
      <div className="flex-1 ml-4">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="flex items-center">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span className="mx-2">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <button className="text-red-600" onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
    </div>
  );
};

export default CartItem;