const Booking = require('../models/booking.model');
const mongoose = require('mongoose');
const ResponseData = require('../data/ResponeData');

const create = async (req, res) => {
  const { dateFrom, dateTo, fullName, hotelId, userId, note, peopleCount } = req.body;
  console.log('🚀 ~ file: booking.controller.js:7 ~ create ~  dateFrom, dateTo, fullName:', dateFrom, dateTo, fullName);

  if (!dateFrom || !dateTo || !fullName) {
    return ResponseData.badRequest(res, 'Ngày đặt, ngày trả, họ tên là bắt buộc');
  }
  try {
    const booking = new Booking({
      dateFrom,
      dateTo,
      fullName,
      hotelId: new mongoose.Types.ObjectId(hotelId),
      note,
      peopleCount,
      userId: new mongoose.Types.ObjectId(userId),
    });

    await booking.save();
    return ResponseData.created(res, {
      ...booking._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    await Booking.find({})
      .populate('Hotel')
      .populate('User')
      .exec((err, bookings) => {
        if (err) {
          console.error(err);
        } else {
          return ResponseData.created(res, {
            bookings,
          });
        }
        mongoose.connection.close(); // Close the connection after the query
      });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByFullName = async (req, res) => {
  try {
    const { fullName } = req.params;
    const bookings = await Booking.find({
      fullName: { $regex: fullName },
    });

    return ResponseData.created(res, {
      bookings,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await Booking.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(id),
      },
      data,
    );
    return ResponseData.ok(res, {
      updated,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const del = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Booking.deleteOne({
      _id: mongoose.Types.ObjectId(id),
    });

    return ResponseData.ok(res, {
      deleted,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = {
  create,
  getAll,
  getByFullName,
  update,
  del,
};
