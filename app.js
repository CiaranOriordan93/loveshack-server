const express = require('express');
const bodyParer = require('body-parser');

const priceRoute = require('./routes/price');
const reviewRoute = require('./routes/review');

const app = express();

app.use(bodyParer.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/price', priceRoute);

app.use('/review', reviewRoute)

app.listen(8081);

/*
export default {
    getNightlyPrice() {
        return apiClient.get('/nightly_price')
    },
    getWeeklyPrice() {
        return apiClient.get('/weekly_price')
    },
    getReviews() {
        return apiClient.get('/all_reviews')
    },
    getAvailability() {
        return apiClient.get('/availability')
    },
    postBooking() {
        return apiClient.post('/booking')
    }
}
*/