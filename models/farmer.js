const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Farmer Schema
const farmerSchema = new Schema({
    farmerName: {
        type: String,
        required: true
    },
    harvestNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'HarvestNode'
    },
    wetMillNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'WetMillNode'
    }
});

// Creating and Exporting Farmer Model
module.exports = mongoose.model('Farmer', farmerSchema);