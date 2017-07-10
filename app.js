const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Vending = require('./models/vending');
const Purchase = require('./models/purchase');

const env = proces.env.NODE_ENV || "dev";
const config = require('./config/config.json')[env]

mongoose.connect(config.mongoUrl);

const vendingRoutes = require('./routes/vending');

app.use(vendingRoutes);

if (require.main === module) {
    app.listen(3000, function () {
        console.log("Server running at http://localhost:3000")
    })
}

module.exports = app;
