// Import initial array of products
const db = require('../data/products');

// Return all products
exports.list = (req, res) => {
    console.log('controller.products.list');
    res.json(db);
}

// Return a product by it's id
exports.show = (req, res) => {
    console.log('controllers.products.show', req.params.id);

    let id = req.params.id;
    let foundProduct = db.find(product => product._id == id);

    res.json(foundProduct);
}

// Generate a new id
let nextId = 11;

// Create a new product
exports.create = (req, res) => {
    console.log('controller.products.create', req.body);

    let newProduct = req.body;
    newProduct._id = nextId;
    nextId++;

    db.push(newProduct);

    res.sendStatus(204);
}