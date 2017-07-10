const express = require('express');
const router = express.Router();

// GET /api/customer/items - get a list of items
// GET /api/customer/items/:itemId - get details on only one item
// POST /api/customer/items/:itemId/purchases - purchase an item
