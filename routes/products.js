const express = require('express');
const router = express.Router();

const controller = require('../controllers/products');

// Return all products
router.get('/products', controller.list);

// Return a product by it'd id
router.get('/products/:id', controller.show);

// Create a new product
router.post('/products', controller.create);

module.exports = router;