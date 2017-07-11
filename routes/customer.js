const express = require('express');
const router = express.Router();
const VendingMachine = require('../models/machine');

// GET /api/customer/items - get a list of items
// POST /api/customer/items/:itemId/purchases - purchase an item

router.get('/api/customer/items', function(req, res) {
  VendingMachine.findOne({
    "name": process.env.NODE_ENV
  }).then(function(data) {
    // console.log(data.items);
    var items = []
    for (var a of data.items) {
      items.push({
        "name": a.name,
        "price": a.price,
        "inStock": a.inStock
      });
    }
    res.json({
      "items": items
    });
  })
});


module.exports = router;
