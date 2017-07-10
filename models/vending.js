const mongoose = require('mongoose');
const Schema = mongoose.Schema

const vendingSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    default: 100,
    min: 0
  },
  volume: {
    type: Number,
    default: 0,
    min: 0
  }
});

const Vending = mongoose.model('Vending', vendingSchema);

module.exports = Vending;
