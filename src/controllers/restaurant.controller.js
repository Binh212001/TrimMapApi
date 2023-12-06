const Restaurant = require("../models/restaurant.model");
const ResponseData = require("../data/ResponeData");
const Meal = require("../models/meal.model");
const create = async (req, res) => {
  try {
    const { name, address, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !address || !image) {
      ResponseData.badRequest(res, "Vui lòng điền đẩy đủ các trường");
    }

    const newRestaurant = new Restaurant({
      name,
      address,
      image,
      description,
    });

    await newRestaurant.save();

    return ResponseData.created(res, {
      ...newRestaurant._doc,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    console.log("🚀 ~ file: restaurant.controller.js:33 ~ getAll ~ restaurants:", restaurants);

    return ResponseData.created(res, {
      restaurants,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const restaurants = await Restaurant.find({
      name: { $regex: name },
    });

    return ResponseData.created(res, {
      restaurants,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, description } = req.body;

    const restaurants = await Restaurant.findByIdAndUpdate(id, {
      name,
      address,
      description,
    });

    return ResponseData.created(res, {
      restaurants,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

const addMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const image = req.file ? req.file.filename : null;
    const data = new Meal({ name, price, image });
    const restaurant = await Restaurant.findByIdAndUpdate(id, {
      $push: {
        meals: data,
      },
    });

    return ResponseData.created(res, {
      restaurant,
    });
  } catch (error) {
    ResponseData.internalServer(res, error);
  }
};

module.exports = { create, getAll, getByName, update, addMeal };
