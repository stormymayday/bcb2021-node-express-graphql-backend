const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Roasting Node Schema
const roastingNodeSchema = new Schema({

    roastingNodeId: {
        type: String,
        // required: true,
    },

    farmer: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Farmer'
    },

    roastingLots: [
        {
            type: Schema.Types.ObjectId,
            // required: true,
            ref: 'RoastingLot'
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

    value: {
        type: String
    },
    valueUnit: {
        type: String
    },
    unitValue: {
        type: String
    },
    unitValueUnit: {
        type: String
    },

    locationId: {
        type: String
    },
    name: {
        type: String
    },

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
    },
    address: {
        type: String
    }

});

// Creating and Exporting the Roasting Node Model
module.exports = mongoose.model('RoastingNode', roastingNodeSchema);