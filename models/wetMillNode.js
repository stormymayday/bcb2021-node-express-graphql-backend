const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Wet Mill Node Schema
const wetMillNodeSchema = new Schema({

    wetMillNodeId: {
        type: String,
        // required: true,
    },

    farmer: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Farmer'
    },

    wetMillLots: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'WetMillLot'
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

// Creating and Exporting Wet Mill Node Model
module.exports = mongoose.model('wetMillNode', wetMillNodeSchema);