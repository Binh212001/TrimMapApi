const express = require('express');

const controller = require('../controllers/booking.controller');

const router = express.Router();

router.post('/create', controller.create);
router.get('/all', controller.getAll);
router.get('/get/name/:name', controller.getByFullName);
router.get('/update/:id', controller.update);
router.get('/delete/:id', controller.del);

module.exports = router;
