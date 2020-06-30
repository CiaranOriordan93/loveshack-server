const express = require('express');

const priceController = require('../controllers/price');

const router = express.Router();



router.get('', priceController.getPrice);

module.exports = router;