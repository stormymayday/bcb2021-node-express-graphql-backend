const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Harvset Lot Schema
const harvestLotSchema = new Schema({
    harvestLotID: {
        type: String,
        required: true
    }
});

// Creating and Exporting Harvest Lot Model
module.exports = mongoose.model('HarvestLot', harvestLotSchema);