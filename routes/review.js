const express = require('express');

const reviewController = require('../controllers/review');

const router = express.Router();


router.get('', reviewController.getReview);

module.exports = router;