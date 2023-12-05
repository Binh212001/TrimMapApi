const express = require('express');
const upload = require('../utils/multer');
const controller = require('../controllers/hotel.controller');

const router = express.Router();

router.post('/create', upload.single('image'), controller.create);
router.get('/all', controller.getAll);
router.get('/get/name/:name', controller.getByName);
router.get('/get/district/:district', controller.getByDistrict);
router.get('/get/province/:province', controller.getByProvince);

module.exports = router;
