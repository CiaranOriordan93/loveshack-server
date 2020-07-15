const Reviews = require('../models/review');
const Prices = require('../models/prices');
const Booking = require('../models/booking');

exports.postAddBooking =  (req, res, next) => {
    const name = req.body.data.name;
    const home = req.body.data.home;
    const arrivalDate = req.body.data.reservation.arrivalDate;
    const departureDate = req.body.data.reservation.departureDate;
    const booking = new Booking(name, arrivalDate, departureDate, home);
    booking.save()
        .then(result => {
            console.log('created booking');
            res.sendStatus(200);
        })
        .catch(error => console.log(error));
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
    const home = req.params.home;
    Booking.fetchByHome(home)
        .then(result => {
            res.status(200).json({ bookings: result });
        })
        .catch(error => console.log(error));
}

exports.deleteBooking = (req, res, next) => {
    const date = req.body.date;
    const name = req.body.name;
    const home = req.body.home;

    Booking.fetchByDate(date, home)
        .then(result => {
            if(result.name == name) {
                Booking.delete(result)
                    .then(result => {
                        res.sendStatus(200);
                })
                .catch(error => console.log(error));
            }else res.status(404).json( { error: 'Check your spelling' })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json( { error: error } )
        });
}