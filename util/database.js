const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://CiaranO:K3Y5EmxaQpxirqoh@cluster0.vmnvr.mongodb.net/<dbname>?retryWrites=true&w=majority')
        .then(client => {
        callback(client);
    }).catch(error => {
        console.log(error);
    });

}

module.exports = mongoConnect;
