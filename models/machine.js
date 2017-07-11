const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    default: 100,
    min: 0
  },
  inStock: {
    type: Number,
    default: 0,
    min: 0
  }
});

const purchaseSchema = new Schema({
  purchasedItem: {
    type: String,
  },
  purchasedAt: {
    type: Date,
    default: Date.now
  }
})

const vendingSchema = new Schema({
  name: {
    type: String,
    default: "dev",
    require: true
  },
  moneyMade: {
    type: Number,
    default: 0,
    min: 0
  },
  purchaseRecords: [purchaseSchema],
  items: [itemSchema]
})

const Vending = mongoose.model('vending', vendingSchema);

module.exports = Vending;
