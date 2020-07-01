const getDb = require('../util/database').getDb;

class Booking {
    constructor(name, reservation) {
        this.name = name;
        this.reservation = reservation;
    }

    save() {
        const db = getDb();
        return db.collection('house').insertOne(this).then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

module.exports = Booking;
