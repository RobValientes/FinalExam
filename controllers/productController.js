const Product = require('../models/Product'); // Assuming you have a Product model defined

// Retrieve all active products
const getAllActiveProducts = async (req, res) => {
  
};

// Retrieve single product by ID
const getSingleProduct = async (req, res) => {
 
};

// Update Product Info (admin only)
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    // Validate the required fields (you can add more validation as per your requirements)
    const { name, description, price, isActive } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ message: 'Name, description, and price are required.' });
    }

    const product = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        description,
        price,
        isActive,
      },
      { new: true } // Returns the updated product in the response
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.status(200).json({ message: 'Product updated successfully.', product });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update the product.', error: error.message });
  }
};

// Archive Product (admin only)
const archiveProduct = async (req, res) => {
  
};

module.exports = { getAllActiveProducts, getSingleProduct, updateProduct, archiveProduct };
