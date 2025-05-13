const bcrypt = require('bcrypt');
const User = require('../models/user');
const ERRORS = require('../utils/errorMessages');

// Create user
exports.createUser = async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword, '0---------');

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: ERRORS.BAD_REQUEST });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};

//Get user by Id
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request:', req.body);

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: ERRORS.USER_NOT_FOUND });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: ERRORS.INCORRECT_PASSWORD });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};
// add aplication

// Root
exports.home = (req, res) => {
  res.send('Hello from Node.js backend!');
};
