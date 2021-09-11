// Import initial array of comments
let db = require('../data/comments');

// Return list of comments currently in db array
exports.list = (req, res) => {
    console.log('controllers.comments.list');
    res.json(db);
}

// Return a comment by it's id
exports.show = (req, res) => {
    console.log('controllers.comments.show', req.params);

    let id = req.params.id;
    let foundItem = db.find(comment => comment._id == id);

    res.json(foundItem);
}

// Generate a new id
let nextId = 5;

// Create a new comment
exports.create = (req, res) => {
    console.log('controllers.comments.create');

    let newComment = req.body;
    newComment._id = nextId;
    nextId++;
    db.push(newComment);
    res.sendStatus(204);
}