import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const isAdded = useSelector(state => state.cart.items.some(i => i.id === plant.id));
  return (
    <div className="border p-2 rounded">
      <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover" />
      <h2>{plant.name}</h2>
      <p>${plant.price}</p>
      <button 
        disabled={isAdded}
        className="bg-green-500 text-white px-2 py-1 mt-2 disabled:opacity-50"
        onClick={() => dispatch(addItem(plant))}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;