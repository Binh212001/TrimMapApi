const mongoose = require("mongoose");

// Define the Meal Schema
const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model("Meal", mealSchema);
