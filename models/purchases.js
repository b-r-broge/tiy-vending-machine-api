const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Vending = require('./vending');

const purchaseSchema = new Schema({
  moneyMade: {
    type: Number,
    default: 0,
    min: 0
  },
  purchasedItem: {
    type: String,
  },
  purchasedAt: {
    type: Date,
    default: Date.now
  },
  item: {
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
  }
})

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
