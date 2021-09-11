const express = require("express");
const router = express.Router();

const controller = require('../controllers/contacts');

// Fetch all contacts
router.get('/contacts', controller.list);

// Get a contact by it's id
router.get('/contacts/:id', controller.show);

// Create a contact
router.post('/contacts', controller.create);

module.exports = router;