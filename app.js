const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorMiddleware);

module.exports = app;