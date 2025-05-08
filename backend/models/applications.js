const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    jobType: { type: String, required: true },
    jobStyle: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
