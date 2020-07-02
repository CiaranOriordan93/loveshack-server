const getDb = require('../util/database').getDb;

class Prices {
    static findByName(houseName) {
        const db = getDb();
        return db   
            .collection('houses')
            .find({ name: houseName })
            .next()
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = Prices;