const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Exporter Intake Node Schema
const exporterIntakeNodeSchema = new Schema({

    exporterIntakeNodeId: {
        type: String,
        // required: true,
    },

    farmer: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Farmer'
    },

    exporterIntakeLots: [
        {
            type: Schema.Types.ObjectId,
            // required: true,
            ref: 'ExporterIntakeLot'
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

// Creating and Exporting the Exporter Intake Node Model
module.exports = mongoose.model('exporterIntakeNode', exporterIntakeNodeSchema);