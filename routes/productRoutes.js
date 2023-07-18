const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllActiveProducts,
  getSingleProduct,
  updateProduct,
  archiveProduct,
} = require('../controllers/productController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Create Product functionality (admin only)
router.post('/create', verifyToken, isAdmin, createProduct);

// Retrieve all active products
router.get('/all', getAllActiveProducts);

// Retrieve single product by ID
router.get('/:productId', getSingleProduct);

// Update Product Info (admin only)
router.put('/update/:productId', verifyToken, isAdmin, updateProduct);

// Archive Product (admin only)
router.put('/:productId/archive', verifyToken, isAdmin, archiveProduct);

module.exports = router;


