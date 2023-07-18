const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getUserOrders } = require('../controllers/orderController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Create Order (NON-admin only)
router.post('/', verifyToken, createOrder);

// Retrieve All Orders (admin only)
router.get('/all', verifyToken, isAdmin, getAllOrders);

// Retrieve Authenticated User's Orders (NON-admin only)
router.get('/user', verifyToken, getUserOrders);

module.exports = router;

