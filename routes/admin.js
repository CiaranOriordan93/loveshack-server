const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/add-booking', adminController.postAddBooking);
router.get('/prices/:id', adminController.getPrices);


module.exports = router;