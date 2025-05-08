const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users');

router.get('/', userController.home);
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.post('/login', userController.loginUser);

module.exports = router;
