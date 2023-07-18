const Order = require('../models/Order'); 

// Create Order (NON-admin only)
const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { products, totalAmount } = req.body;

    // Validate the required fields (you can add more validation as per your requirements)
    if (!products || !Array.isArray(products) || products.length === 0 || !totalAmount) {
      return res.status(400).json({ message: 'Products array and totalAmount are required.' });
    }

    // Create the order
    const order = new Order({
      userId,
      products,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: 'Order created successfully.', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create the order.', error: error.message });
  }
};

// Retrieve All Orders (admin only)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId', 'username'); // Assuming you have a User model with 'username' field

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve all orders.', error: error.message });
  }
};

// Retrieve Authenticated User's Orders (NON-admin only)
const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;

    const userOrders = await Order.find({ userId });

    res.status(200).json({ userOrders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user orders.', error: error.message });
  }
};

module.exports = { createOrder, getAllOrders, getUserOrders };
