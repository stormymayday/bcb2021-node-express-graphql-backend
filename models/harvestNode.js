const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Harvest Node Schema
const harvestNodeSchema = new Schema({
    harvestNodeId: {
        type: String,
        required: true,
    },
    farmer: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Farmer'
    },
    harvestLots: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'HarvestLot'
        }
    ]
});

// Creating and Exporting Harvest Node Model
module.exports = mongoose.model('HarvestNode', harvestNodeSchema);