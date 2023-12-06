const mongoose = require("mongoose");
const MealSchema = require("./meal.model");

// Define the Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  meals: [],
});

// Create the Restaurant model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Export the model
module.exports = Restaurant;
