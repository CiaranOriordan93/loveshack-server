const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(process.env.MONGODB_URI)
        .then(client => {
            _db = client.db();
            callback();
    }).catch(error => {
        console.log(error);
        throw error;
    });

};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database found!';
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
