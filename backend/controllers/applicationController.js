const Application = require('../models/application');
const ERRORS = require('../utils/errorMessages');

// Create a new application
exports.createApplication = async (req, res) => {
  try {
    const { companyName, jobType, jobStyle, role, location } = req.body;

    const newApp = new Application({ companyName, jobType, jobStyle, role, location });
    const savedApp = await newApp.save();

    res.status(201).json(savedApp);
  } catch (err) {
    res.status(400).json({ error: ERRORS.BAD_REQUEST });
  }
};

// Get all applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};

// Get one application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};
