const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Harvest Lot Schema
const harvestLotSchema = new Schema({
    harvestLotID: {
        type: String,
        required: true
    },
    lotWeight: {
        type: Number
    },
    ammountPaid: {
        type: Number
    },
    harvestNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'HarvestNode'
    }
});

// Creating and Exporting Harvest Lot Model
module.exports = mongoose.model('HarvestLot', harvestLotSchema);