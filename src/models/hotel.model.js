const mongoose = require("mongoose");

// Define the hotel schema
const hotelSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // You can store the path to the image or use a different data type based on your needs
  },
  price: {
    type: Number,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    // You might want to specify a range or validation for the rate
  },
});

// Create the Hotel model
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
