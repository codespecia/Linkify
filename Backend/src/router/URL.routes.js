// Importing External Modules
import express from 'express';

// Importing Internal Functions
import {
  handleCreateShortID,
  handleRedirectOriginalURL,
} from '../controllers/URL.controller.js';

// Define Variables
const URLRouter = express.Router();

// Creating CreateURL Route
URLRouter.post('/createshortid', handleCreateShortID);

// Creating RedirectURL Route
URLRouter.get('/:shortId', handleRedirectOriginalURL);

// Exporting URLRouter
export default URLRouter;
