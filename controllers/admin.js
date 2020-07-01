const Booking = require('../models/booking');

exports.postAddBooking =  (req, res, next) => {
    const name = req.body.name;
    const reservation = req.body.reservation;
    const booking = new Product(name, reservation);
    booking.save()
        .then(result => {
            console.log('created booking');
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        }); 
}

exports.getPrices = (req, res, next) => {
    res.status(200).json({ pricePerNight: 200, pricePerWeek: 900})
}