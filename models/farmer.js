const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Importing Harvet Lot Model
const HarvestLot = require('./harvestLot');

// Farmer Schema
const farmerSchema = new Schema({
    farmerName: {
        type: String,
        required: true
    },
    harvestNodeID: {
        type: String,
        required: true
    }
});

// Creating and Exporting Farmer Model
module.exports = mongoose.model('Farmer', farmerSchema);