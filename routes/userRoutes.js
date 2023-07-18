const express = require('express');
const router = express.Router();
const { setUserAsAdmin, getUserDetails } = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Set User as Admin functionality
router.put('/:userId/setAsAdmin', verifyToken, isAdmin, setUserAsAdmin);

// Retrieve User Details
router.get('/:userId', verifyToken, getUserDetails);

module.exports = router;
