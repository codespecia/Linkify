// Importing External Module
import 'dotenv/config';

// Import Internal Functions
import app from './app.js';
import connectDB from './src/config/MongoDB.config.js';

// Define Variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'Production';

// Creating Express Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server launched on port ${PORT} in ${NODE_ENV} mode.`);
});
