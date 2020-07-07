const getDb = require('../util/database').getDb;

class Booking {
    constructor(name, arrivalDate, departureDate) {
        this.name = name;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
    }

    save() {
        const db = getDb();
        return db.collection('booking').insertOne(this).then(result => {
            console.log("success on saving to db from model");
        })
        .catch(error => {
            console.log(error);
        });
    }
}

module.exports = Booking;
