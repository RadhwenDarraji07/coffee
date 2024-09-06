const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Import mongoose
const connectDB = require('./db'); // Import the database connection file

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Product Schema and Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

// API Endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the Coffee Shop API');
});

// Get All Products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a New Product
app.post('/products', async (req, res) => {
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
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
