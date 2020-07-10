const Reviews = require('../models/review');
const Prices = require('../models/prices');
const Booking = require('../models/booking');

exports.postAddBooking =  (req, res, next) => {
    const name = req.body.data.name;
    const arrivalDate = req.body.data.reservation.arrivalDate;
    const departureDate = req.body.data.reservation.departureDate;
    const booking = new Booking(name, arrivalDate, departureDate);
    booking.save()
        .then(result => {
            console.log('created booking');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
        }); 
}

exports.getPrices = (req, res, next) => {
    const houseName = req.params.id;
    Prices.findByName(houseName)
        .then(result => {
            res.status(200).json({ pricePerNight: result.pricePerNight, pricePerWeek: result.pricePerWeek })
        })
        .catch(error => console.log(error));
}

exports.getReviews = (req, res, next) => {
    Reviews.fetchAll()
        .then(result => {
            res.status(200).json({ reviews: result});
        })
        .catch(error => console.log(error));
}

exports.getBookings = (req, res, next) => {
    Booking.fetchAll()
        .then(result => {
            res.status(200).json({ bookings: result })
        })
        .catch(error => console.log(error));
}