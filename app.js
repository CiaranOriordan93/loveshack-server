const express = require('express');
const bodyParer = require('body-parser');

const adminRoutes = require('./routes/admin');

const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParer.json());


app.use('/admin', adminRoutes);

const PORT = process.nextTick.PORT || 3003

mongoConnect(PORT, () => {
    app.listen(8081);
});