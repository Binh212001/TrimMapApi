const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    // You can add additional validation for phone numbers if needed
  },
  avatar: {
    type: String,
    // You can store the path to the avatar image or use a different data type based on your needs
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
