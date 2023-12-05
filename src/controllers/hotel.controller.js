const Holtel = require('../models/hotel.model');
const ResponseData = require('../data/ResponeData');

const create = async (req, res) => {
  try {
    const { name, description, province, district, type, price } = req.body;
    const image = req.file ? req.file.filename : null;

    console.log(image);

    if (!name || !description || !province || !type || !image || !district || !price) {
      ResponseData.badRequest(res, 'Vui lòng điền đẩy đủ các trường');
    }

    const newHoltel = new Holtel({
      name,
      description,
      image,
      province,
      type,
      district,
      price,
    });

    await newHoltel.save();

    return ResponseData.created(res, {
      ...newHoltel._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    const holtels = await Holtel.find();

    return ResponseData.created(res, {
      holtels,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const holtels = await Holtel.find({
      name: { $regex: name },
    });

    return ResponseData.created(res, {
      holtels,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByProvince = async (req, res) => {
  try {
    const { province } = req.params;
    const holtels = await Holtel.find({
      province: { $regex: province },
    });

    return ResponseData.created(res, {
      holtels,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByDistrict = async (req, res) => {
  try {
    const { district } = req.params;
    const holtels = await Holtel.find({
      district: { $regex: district },
    });

    return ResponseData.created(res, {
      holtels,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = { create, getAll, getByName, getByDistrict, getByProvince };
