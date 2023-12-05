const mongoose = require("mongoose");

// Define the destination schema
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // You can store the path to the image or use a different data type based on your needs
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    // You might want to specify a predefined set of types or validate it further
    required: true,
  },
});

// Create the Destination model
const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
