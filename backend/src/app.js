const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
require('./config/db');

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);


app.use('/api/v1/users', userRoutes);

app.use(notFound)
app.use(errorHandler);

module.exports = app;
