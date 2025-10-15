import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>{product.price} DA</strong></p>
        <Link to={`/product/${product._id}`} className="btn btn-primary">Voir</Link>
      </div>
    </div>
  );
}

export default ProductCard;
