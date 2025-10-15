
const Product = require('../models/product');

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      image
    });

    await newProduct.save();

    res.status(201).json({ message: 'Produit créé avec succès', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
