const bcrypt = require('bcrypt');
const User = require('../models/user');
const ERRORS = require('../utils/errorMessages');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const users = [];

// Create user
exports.createUser = async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const saved = await user.save();

    const token = jwt.sign(
      { id: saved._id, email: saved.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );
    const { password: _, ...userWithoutPassword } = saved.toObject();

    res.status(201).json({ user: userWithoutPassword, token });
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
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};

exports.home = (req, res) => {
  res.send('Hello from Node.js backend!');
};
