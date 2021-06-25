const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Exporter Intake Lot Schema
const exporterIntakeLotSchema = new Schema({

    exporterIntakeNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ExporterIntakeNode'
    },


    exporterIntakeLotId: {
        type: String
    },
    exporterIntakeNodeId: {
        type: String
    },

    organizationId: {
        type: String
    },
    marketplaceId: {
        type: String
    },
    productId: {
        type: String
    },
    lotName: {
        type: String
    },
    lotType: {
        type: String
    },
    lotDetailType: {
        type: String
    },
    createdDate: {
        type: String
    },
    lastModifiedDate: {
        type: String
    },
    productName: {
        type: String
    },
    productToken: {
        type: String
    },
    productSku: {
        type: String
    },
    organizationName: {
        type: String
    },
    currentWeight: {
        type: String
    },
    currentWeightUnit: {
        type: String
    },
    absorbedWeight: {
        type: String
    },
    absorbedWeightUnit: {
        type: String
    },
    quality: {
        type: String
    },
    lotIsOpen: {
        type: Boolean
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
    asset: {
        type: String
    },
    timestamp: {
        type: String
    },

    processingDate: {
        type: String
    }

});

// Creating and Exporting the Exporter Intake Lot Model
module.exports = mongoose.model('ExporterIntakeLot', exporterIntakeLotSchema);