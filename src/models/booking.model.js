const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  dateFrom: {
    type: Date,
    required: true,
  },
  dateTo: {
    type: Date,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  note: {
    type: String,
  },
  peopleCount: {
    type: Number,
    required: true,
  },
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
