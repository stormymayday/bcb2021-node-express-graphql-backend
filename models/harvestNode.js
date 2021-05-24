const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Harvest Node Schema
const harvestNodeSchema = new Schema({
    harvestNodeId: {
        type: String,
        // required: true,
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
    ],

    totaAbsorbedWeight: {
        type: String
    },
    totalAbsorbedWeightUnit: {
        type: String
    },

    organizationId: {
        type: String
    },
    marketplaceId: {
        type: String
    },
    defaultLocationId: {
        type: String
    },
    nodeName: {
        type: String
    },
    nodeType: {
        type: String
    },
    nodeDetailType: {
        type: String
    },
    createdDate: {
        type: String
    },
    lastModifiedDate: {
        type: String
    },
    organizationName: {
        type: String
    },
    images: [
        {
            type: String
        }
    ],
    videos: [
        {
            type: String
        }
    ],
    documents: [
        {
            type: String
        }
    ],

    country: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    elevation: {
        type: String
    },
    elevationUnit: {
        type: String
    }

});

// Creating and Exporting Harvest Node Model
module.exports = mongoose.model('HarvestNode', harvestNodeSchema);