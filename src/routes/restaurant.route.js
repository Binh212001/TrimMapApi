const express = require("express");
const controller = require("../controllers/restaurant.controller");
const upload = require("../utils/multer");

const router = express.Router();

router.post("/create", upload.single("image"), controller.create);
router.get("/all", controller.getAll);
router.get("/get/name/:name", controller.getByName);
router.put("/:id/addMeal", upload.single("image"), controller.addMeal);

module.exports = router;
