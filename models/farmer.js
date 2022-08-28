const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Farmer Schema
const farmerSchema = new Schema({
    farmerName: {
        type: String,
        required: true
    },
    producerName: {
        type: String
    },
    harvestYear: {
        type: String
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
    },
    exporterIntakeNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ExporterIntakeNode'
    },
    dryMillNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'DryMillNode'
    },
    exportNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ExportNode'
    },
    importNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ImportNode'
    }
});

// Creating and Exporting Farmer Model
module.exports = mongoose.model('Farmer', farmerSchema);