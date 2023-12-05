const mongoose = require("mongoose");

// Define the schedule schema
const scheduleSchema = new mongoose.Schema({
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  closeHour: {
    type: Number,
    required: true,
  },
  openHour: {
    type: Number,
    required: true,
  },
});

// Create the Schedule model
const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
