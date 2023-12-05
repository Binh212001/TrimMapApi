const Destination = require("../models/destination.model");
const ResponseData = require("../data/ResponeData");

const create = async (req, res) => {
  try {
    const { name, description, province, district, type } = req.body;
    const image = req.file ? req.file.filename : null;

    console.log(image);

    if (!name || !description || !province || !type || !image || !district) {
      ResponseData.badRequest(res, "Vui lòng điền đẩy đủ các trường");
    }

    const newDestination = new Destination({
      name,
      description,
      image,
      province,
      type,
      district,
    });

    await newDestination.save();

    return ResponseData.created(res, {
      ...newDestination._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    const destinations = await Destination.find();

    return ResponseData.created(res, {
      destinations,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const destinations = await Destination.find({
      name: { $regex: name },
    });

    return ResponseData.created(res, {
      destinations,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByProvince = async (req, res) => {
  try {
    const { province } = req.params;
    const destinations = await Destination.find({
      province: { $regex: province },
    });

    return ResponseData.created(res, {
      destinations,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByDistrict = async (req, res) => {
  try {
    const { district } = req.params;
    const destinations = await Destination.find({
      district: { $regex: district },
    });

    return ResponseData.created(res, {
      destinations,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = {
  create,
  getAll,
  getByName,
  getByProvince,
  getByDistrict,
};
