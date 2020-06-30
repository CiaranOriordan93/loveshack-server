<<<<<<< HEAD
const express = require('express');
const bodyParer = require('body-parser');

const priceRoute = require('./routes/price');
const reviewRoute = require('./routes/review');

const mongoConnect = require('./util/database');

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

mongoConnect(client => {
    app.listen(8081);
=======
const express = require('express');
const bodyParer = require('body-parser');

const priceRoute = require('./routes/price');
const reviewRoute = require('./routes/review');

const mongoConnect = require('./util/database');

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

mongoConnect(client => {
    app.listen(8081);
>>>>>>> 037f93112d1c9690dc1b47552ddfd47f028e54ff
})