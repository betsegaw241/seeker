const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    jobType: {
      type: String,
      enum: ['Full Time', 'Part Time', 'Contract'],
      required: true,
    },
    workLocation: {
      type: String,
      enum: ['Onsite', 'Remote', 'Hybrid'],
      required: true,
    },
    status: {
      type: String,
      enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Applied',
    },
    date: { type: String, required: true },
    notes: { type: String },
    interviewDateTime: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
