const User = require('../models/users'); // Assuming you have a User model defined

// Set User as Admin functionality
const setUserAsAdmin = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by ID and update the isAdmin field to true
    const user = await User.findByIdAndUpdate(userId, { isAdmin: true }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User set as admin successfully.', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to set user as admin.', error: error.message });
  }
};

// Retrieve User Details
const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user details.', error: error.message });
  }
};

module.exports = { setUserAsAdmin, getUserDetails };
