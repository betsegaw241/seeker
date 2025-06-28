const express = require('express');
const userRoutes = require('./routes/userRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const cors = require('cors');
// const authRoutes = require('./config/');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/applications', applicationRoutes);

module.exports = app;
