const Catalog = require('../models/catalog.model');
const mongoose = require('mongoose');
const ResponseData = require('../data/ResponeData');

const create = async (req, res) => {
  try {
    const { level, title, description, destinationId } = req.body;

    const image = req.file ? req.file.filename : null;

    if (!level || !description || !title || !destinationId || !image) {
      ResponseData.badRequest(res, 'Vui lòng điền đẩy đủ các trường');
    }

    const newCatalog = new Catalog({
      level,
      title,
      description,
      destinationId: new mongoose.Types.ObjectId(destinationId),
      image,
    });

    await newCatalog.save();

    return ResponseData.created(res, {
      ...newCatalog._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getCatalog = async (req, res) => {
  const { destinationId } = req.params;
  try {
    const catalog = await Catalog.findOne({ destinationId: new mongoose.Types.ObjectId(destinationId) });
    return ResponseData.ok(res, {
      catalog,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const delCatalog = async (req, res) => {
  const { destinationId } = req.params;
  try {
    const catalog = await Catalog.deleteOne({ destinationId: new mongoose.Types.ObjectId(destinationId) });
    return ResponseData.ok(res, {
      catalog,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};
module.exports = {
  getCatalog,
  create,
  delCatalog,
};
