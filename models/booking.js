const getDb = require('../util/database').getDb;

class Booking {
    constructor(name, arrivalDate, departureDate) {
        this.title = name;
        this.start = arrivalDate;
        this.end = departureDate;
        this.display = 'background';
        this.backgroundColor = 'red';
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
    
    static fetchAll() {
        const db = getDb();
        return db
            .collection('booking')
            .find()
            .toArray()
            .then(result => {
                return result;
            })
            .catch(error => console.log(error));
    }
}

module.exports = Booking;
