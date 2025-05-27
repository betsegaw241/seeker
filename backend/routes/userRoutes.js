const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users');
const authenticateToken = require('../middleware/auth');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', authenticateToken, userController.getUserById);

module.exports = router;
