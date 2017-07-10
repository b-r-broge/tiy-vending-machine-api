const express = require('express');
const router = express.Router();

// GET /api/customer/items - get a list of items
// GET /api/customer/items/:itemId - get details on only one item
// POST /api/customer/items/:itemId/purchases - purchase an item

router.use(function (req, res, next) {
  console.log('middleware');
  next();
});

router.get('/api/customer/items', function (req, res) {
  // do stuff
  res.json('{"return": "a thing"}');
});


module.exports = router;
