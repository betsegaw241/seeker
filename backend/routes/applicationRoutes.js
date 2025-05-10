const express = require('express');
const router = express.Router();
const appController = require('../controllers/applicationController');

router.post('/', appController.createApplication);
router.get('/', appController.getApplications);
router.get('/applications/:id', appController.getApplicationById);

module.exports = router;
