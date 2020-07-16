const getDb = require('../util/database').getDb;

const formater = (date) => {
    const d = new Date();
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();

    if(month.length < 2) {
        month = '0' + month;
    }
    if(day.length < 2) {
        day = '0' + day;
    }

    const currentDate = [year, month, day].join('-');

    if(date > currentDate) {
        return true;
    }else return false;
}

const doubleBookingChecker = (date, home) => {
    const db = getDb();
    return db
        .collection('bookings')
        .find({ $and: [ {start: { $eq: date } }, { home: { $eq: home } }]})
        .next()
        .then(result => {
            if(result._id) {
                return false;
            }else return true;
        }).catch(error => {
            return error;
        });
}


exports.formater = formater;
exports.doubleBookingChecker = doubleBookingChecker;