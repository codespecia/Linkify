// Importing Module
import express from 'express';

// Importing Internal Functions
import URLRouter from './src/router/URL.routes.js';

// Define Variables
const app = express();

// Define Middlewares
app.use(express.json());

// Define Basic Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    route: 'Home or /',
    message: 'Basic express server is running well',
  });
});

// Define URL-API Routes
app.use('/', URLRouter);

// Exporrting Functions
export default app;
