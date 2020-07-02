const Booking = require('../models/booking');
const Prices = require('../models/prices');

exports.postAddBooking =  (req, res, next) => {
    const name = req.body.name;
    const reservation = req.body.reservation;
    const booking = new Product(name, reservation);
    Booking.save()
        .then(result => {
            console.log('created booking');
            res.redirect('/');
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