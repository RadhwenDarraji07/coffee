const Product = require('../models/productModel');

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a New Product
const createProduct = async (req, res) => {
  const { name, price, description, imageUrl, category } = req.body;

  const newProduct = new Product({
    name,
    price,
    description,
    imageUrl,
    category,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllProducts, createProduct };
