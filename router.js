const express = require('express');
const items = require('./controllers/itemsController');

const router = express.Router();

router.get('/items', items.index);

module.exports = router;
