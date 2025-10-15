import ProductCard from '../components/ProductCard';

const dummyProducts = [
  {
    _id: '1',
    title: 'Chaussures Nike',
    description: 'Confortables et stylées',
    price: 100,
    image: 'https://via.placeholder.com/200'
  },
  {
    _id: '2',
    title: 'Montre Casio',
    description: 'Résistante à l’eau',
    price: 150,
    image: 'https://via.placeholder.com/200'
  }
];

function HomePage() {
  return (
    <div className="row">
      {dummyProducts.map(product => (
        <div className="col-md-4 mb-4" key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
