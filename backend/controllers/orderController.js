
const Order = require('../models/order');
const Product = require('../models/product');

const createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'Aucun produit dans la commande.' });
    }

    // Calculer le total
    let total = 0;
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Produit non trouvé : ${item.product}` });
      }
      total += product.price * item.quantity;
    }

    // Créer la commande
    const newOrder = new Order({
      user: userId,
      products,
      totalPrice: total,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Commande créée', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

// Obtenir toutes les commandes
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name price');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
