const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id',userController.getUserById);

module.exports = router;
