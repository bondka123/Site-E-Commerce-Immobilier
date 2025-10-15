import { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Votre panier</h2>
      {cart.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item._id} className="card mb-2 p-2">
              <h5>{item.title}</h5>
              <p>{item.price} DA</p>
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(item._id)}>Supprimer</button>
            </div>
          ))}
          <hr />
          <h4>Total : {total} DA</h4>
          <button className="btn btn-success">Commander</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
