const express = require('express');

const controller = require('../controllers/catalog.controller');
const upload = require('../utils/multer');

const router = express.Router();

router.get('/:destinationId', controller.getCatalog);
router.post('/create', upload.single('image'), controller.create);
router.delete('/delete/:destinationId', controller.delCatalog);

module.exports = router;
