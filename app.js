const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const VendingMachine = require('./models/machine');

const env = process.env.NODE_ENV || "dev";
const config = require('./config/config.json')[env]

mongoose.connect(config.mongoUrl);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const vendorRoutes = require('./routes/vendor');
const customerRoutes = require('./routes/customer');

app.use(vendorRoutes);
app.use(customerRoutes);

if (require.main === module) {
  app.listen(3000, function () {
    console.log("Server running at http://localhost:3000")
  })
}

module.exports = app;
