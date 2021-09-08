const express = require("express");
const router = express.Router();

const controller = require('../controllers/comments');

/**
 * GET Comments
 * GET Comments by Id
 * POST Comments
 */

// Fetch all comments
router.get('/comments', controller.list);

// Fetch a specific comment by id
router.get('/comments/:id', controller.show);

// Create a new comment
router.post('/comments', controller.create);

module.exports = router;