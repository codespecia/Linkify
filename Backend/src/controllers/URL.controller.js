// Importing External Modules
import { nanoid } from 'nanoid';

// Importing Internal Function
import URLModel from '../models/URL.model.js';

// Create and Export handleCreateShortID
export const handleCreateShortID = async (req, res) => {
  // Extract request body data
  const { url } = req.body;

  try {
    // Validate Incoming Request Parameters
    if (!url) {
      return res.status(400).json({
        success: false,
        message: 'URL is required',
      });
    }

    // Validate URL Structure
    const parsedUrl = new URL(url);

    // Creating ShortID
    const shortID = nanoid(8);

    // Store & Saving User Data
    const newURL = new URLModel({
      shortID: shortID,
      redirectURL: url,
    });
    await newURL.save();

    // Sending Success Message
    res.status(201).json({
      success: true,
      message: 'shortID created successfully',
      shortID: shortID,
    });

    // Error Hangelling
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Create and Export handleRedirectOriginalURL
export const handleRedirectOriginalURL = async (req, res) => {
  // Extract request params data
  const shortId = req.params.shortId;

  try {
    // Validate Existing ShortURL
    const entry = await URLModel.findOne({ shortID: shortId });
    if (!entry) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ShortURL',
      });
    }

    // Redirecting to the Original URl
    res.redirect(entry.redirectURL);

    // Error Hangelling
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
