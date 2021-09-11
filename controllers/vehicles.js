// Import the array of vehicles
const db = require('../data/vehicles');

// Return all vehicles
exports.list = (req, res) => {
    console.log('controller.vehicles.list');
    res.json(db);
}

// Return a vehicle by it's id
exports.show = (req, res) => {
    console.log('controller.vehicles.show', req.params.id);

    let id = req.params.id;

    let foundVehicle = db.find(vehicle => vehicle._id == id);

    res.json(foundVehicle);
}

// Generate a new id
let nextId = 21;

// Create a new vehicle
exports.create = (req, res) => {
    console.log('controller.vehicles.create', req.body);

    let newVehicle = req.body;
    newVehicle._id = nextId;
    nextId++;

    db.push(newVehicle);
    res.sendStatus(204);
}