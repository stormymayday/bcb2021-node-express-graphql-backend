const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Dry Mill Lot Schema
const dryMillLotSchema = new Schema({

    dryMillNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'DryMillNode'
    },


    dryMillLotId: {
        type: String
    },
    dryMillNodeId: {
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

// Creating and Exporting Dry Mill Lot Model
module.exports = mongoose.model('DryMillLot', dryMillLotSchema);