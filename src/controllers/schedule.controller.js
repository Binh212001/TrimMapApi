const Schedule = require('../models/schedule.model');
const ResponseData = require('../data/ResponeData');
const mongoose = require('mongoose');

const create = async (req, res) => {
  const { destinationId, day, closeHour, openHour } = req.body;
  console.log('🚀 ~ file: schedule.controller.js:7 ~ create ~ closeHour, openHour :', closeHour, openHour);

  if (day < 2 || day > 8 || closeHour > 24 || closeHour < 0 || openHour < 0 || openHour > 24) {
    ResponseData.badRequest(res, 'Ngày(2-7)  và  giờ đóng mở cửa (0-24) ');
  }
  try {
    const schedule = new Schedule({
      destinationId: new mongoose.Types.ObjectId(destinationId),
      openHour,
      closeHour,
      day,
    });
    await schedule.save();
    return ResponseData.created(res, {
      ...schedule._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = { create };
