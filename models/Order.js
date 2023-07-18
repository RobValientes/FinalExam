const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId : {
    type: String,
    ref: 'User',
    required: [true, "UserID is required"]
  },
  products: [
    {
      productId: {
        type: String,
        ref: 'Product',
        required: [true, "ProductID is required"]
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is Required"]
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: [true, "Price is required"]
  },
  purchasedOn: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
