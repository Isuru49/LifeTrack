const express = require('express');
const connectDB = require('./config/db');  // Import the DB connection
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Setup other middlewares and routes here...
