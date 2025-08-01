import ProductCard from '../components/ProductCard';

const samplePlants = [
  { id: 1, name: 'Aloe Vera', price: 12, category: 'Succulent', image: '/assets/aloe.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, category: 'Indoor', image: '/assets/fig.jpg' },
  { id: 3, name: 'Peace Lily', price: 20, category: 'Flowering', image: '/assets/lily.jpg' },
  { id: 4, name: 'Snake Plant', price: 15, category: 'Indoor', image: '/assets/snake.jpg' },
  { id: 5, name: 'Jade Plant', price: 10, category: 'Succulent', image: '/assets/jade.jpg' },
  { id: 6, name: 'Orchid', price: 25, category: 'Flowering', image: '/assets/orchid.jpg' },
];

const ProductList = () => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
    {samplePlants.map(plant => <ProductCard key={plant.id} plant={plant} />)}
  </div>
);

export default ProductList;