const mongoose = require("mongoose");

// Define the catalog schema
const catalogSchema = new mongoose.Schema({
  level: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // You can store the path to the image or use a different data type based on your needs
  },
  description: {
    type: String,
    required: true,
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination", // Assuming you have a Destination model
    required: true,
  },
});

// Create the Catalog model
const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
