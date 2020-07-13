const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/add-booking', adminController.postAddBooking);
router.get('/get-booking', adminController.getBookings);
router.delete('/delete-booking', adminController.deleteBooking);

router.get('/reviews', adminController.getReviews);
router.get('/prices/:id', adminController.getPrices);



module.exports = router;