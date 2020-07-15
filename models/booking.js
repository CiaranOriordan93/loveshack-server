const getDb = require('../util/database').getDb;

class Booking {
    constructor(name, arrivalDate, departureDate, home) {
        this.name = name;
        this.home = home;
        this.start = arrivalDate;
        this.end = departureDate;
        this.display = 'background';
        this.backgroundColor = 'red';
    }

    save() {
        const db = getDb();
        return db.collection('bookings').insertOne(this).then(result => {
            console.log("success on saving to db from model");
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    static fetchAll() {
        const db = getDb();
        return db
            .collection('bookings')
            .find()
            .toArray()
            .then(result => {
                return result;
            })
            .catch(error => console.log(error));
    }

    static fetchByDate(date, home) {
        const db = getDb();
        return db  
            .collection('bookings')
            .find({ $and: [ {start: { $eq: date } }, { home: { $eq: home } }]})
            .next()
            .then(result => {
                return result
            })
            .catch(error => {
                return error
            });
    }

    static fetchByHome(home) {
        const db = getDb();
        return db
            .collection('bookings')
            .find({ home : { $eq: home } })
            .toArray()
            .then(result => {
                return result
            })
            .catch(error => {
                return error
            });
    }

    static delete(booking) {
        const db = getDb();
        return db
            .collection('bookings')
            .deleteOne({ _id: booking._id })
            .then(result => {
                console.log('Deleted');
            })
            .catch(error => console.log(error));
    }
}

module.exports = Booking;
