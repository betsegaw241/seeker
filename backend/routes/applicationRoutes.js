const express = require('express');
const router = express.Router();
const appController = require('../controllers/applicationController');

router.post('/applications', appController.createApplication);
router.get('/applications', appController.getApplications);
router.get('/applications/:id', appController.getApplicationById);

module.exports = router;
