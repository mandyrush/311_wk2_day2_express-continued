const express = require("express");
const app = express();

// add support to parsing json in the body
app.use(express.json());

app.use(express.static("./public"));

// Load routes for comments
const comments = require('./routes/comments');
app.use(comments);

// Load routes for contacts
const contacts = require('./routes/contacts');
app.use(contacts);

// Load routes for vehicles
const vehicles = require('./routes/vehicles');
app.use(vehicles);

const products = require('./routes/products');
app.use(products);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
