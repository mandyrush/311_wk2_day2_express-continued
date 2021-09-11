const express = require('express');
const router = express.Router();

const controller = require('../controllers/vehicles');

// Get all vehicles
router.get('/vehicles', controller.list);

// Get a vehicle by it's id
router.get('/vehicles/:id', controller.show);

// Create a new vehicle
router.post('/vehicles', controller.create);

module.exports = router;