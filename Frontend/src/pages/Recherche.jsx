import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Exemple de données produits (plus tard, tu récupéreras ça d'une API)
const products = [
  { id: 1, name: "Chaussures de sport", price: 120 },
  { id: 2, name: "Montre connectée", price: 250 },
  { id: 3, name: "Sac à dos", price: 80 },
  { id: 4, name: "Casque audio", price: 150 },
  { id: 5, name: "Lunettes de soleil", price: 60 },
];

function Recherche() {
  const [query, setQuery] = useState('');

  // Filtrer les produits selon la recherche (insensible à la casse)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Recherche de produits</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Tapez le nom d’un produit..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <ul className="list-group">
          {filteredProducts.map(product => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
              <span>{product.price} DT</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit trouvé.</p>
      )}
    </div>
  );
}

export default Recherche;
