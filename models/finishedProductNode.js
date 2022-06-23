const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Finished Product Node Schema
const finishedProductNodeSchema = new Schema({

    farmer: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Farmer'
    },

    totaAbsorbedWeight: {
        type: String
    },
    totalAbsorbedWeightUnit: {
        type: String
    },

    finishedProductLots: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'FinishedProductLot'
        }
    ],

    finishedProductNodeId: {
        type: String,
        // required: true,
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


// Creating and Exporting Finished Product Node Model
module.exports = mongoose.model('finishedProductNode', finishedProductNodeSchema);