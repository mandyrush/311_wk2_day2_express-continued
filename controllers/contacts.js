// Import the array of contacts
let db = require('../data/contacts');

// Return all contacts
exports.list = (req, res) => {
    console.log('controllers.contacts.list');
    res.json(db);
}

// Return a contact by it's id
exports.show = (req, res) => {
    console.log('controllers.contacts.show', req.params);

    let id = req.params.id;
    let foundContact = db.find(contact => contact._id == id);

    res.json(foundContact);
}

// Generate a new id
let nextId = 6;

// Create a new contact
exports.create = (req, res) => {
    console.log('controllers.contacts.create');

    let newContact = req.body;
    newContact._id = nextId;
    nextId++;
    db.push(newContact);
    res.sendStatus(204)
}