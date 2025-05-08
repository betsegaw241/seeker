const User = require('../models/user');

// Create user
exports.createUser = async (req, res) => {
  console.log('Request Body:', req.body); 
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  console.log('-----------')
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Root
exports.home = (req, res) => {
  res.send('Hello from Node.js backend!');
};
