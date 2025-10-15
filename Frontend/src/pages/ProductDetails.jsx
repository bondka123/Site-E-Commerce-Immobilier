import { useParams } from 'react-router-dom';

const dummyProducts = [
  { _id: '1', title: 'Chaussures Nike', description: 'Confortables', price: 100, image: 'https://via.placeholder.com/200' },
  { _id: '2', title: 'Montre Casio', description: 'Étanche', price: 150, image: 'https://via.placeholder.com/200' }
];

function ProductDetails() {
  const { id } = useParams();
  const product = dummyProducts.find(p => p._id === id);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item._id === product._id);
    if (!exists) {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produit ajouté au panier');
  };

  if (!product) return <p>Produit introuvable</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" alt={product.title} />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>{product.price} DA</strong></p>
        <button className="btn btn-primary" onClick={addToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default ProductDetails;
