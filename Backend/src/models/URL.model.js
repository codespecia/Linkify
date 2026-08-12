// Importing External Modules
import mongoose from 'mongoose';

// Creating URL Schema
const URLSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      unique: true,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating URL Model
const URLModel = mongoose.model('URL', URLSchema);

// Exporting URL Model
export default URLModel;
