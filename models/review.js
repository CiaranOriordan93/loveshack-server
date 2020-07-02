const getDb = require('../util/database').getDb;

class Reviews {
    static fetchAll() {
        const db = getDb();
        return db
            .collection('reviews')
            .find()
            .toArray()
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = Reviews;