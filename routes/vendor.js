const express = require('express');
const router = express.Router();

// GET /api/vendor/purchases - get a list of all purchases with their item and date/time
// GET /api/vendor/money - get a total amount of money accepted by the machine
// POST /api/vendor/items - add a new item not previously existing in the machine
// PUT /api/vendor/items/:itemId - update item quantity, description, and cost

router.use(function (req, res, next) {
  console.log('middleware');
  next();
});

router.get('/api/vendor/purchases', function (req, res) {
  // do stuff
  res.json('{"return": "a thing"}');
});

module.exports = router;
