const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Export Lot Schema
const exportLotSchema = new Schema({

    exportNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ExportNode'
    },


    exportLotId: {
        type: String
    },
    exportNodeId: {
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

    secondPaymentValue: {
        type: String
    },
    secondPaymentAsset: {
        type: String
    },
    secondPaymentTimeStamp: {
        type: String
    },
    secondPaymentNotes: {
        type: String
    },

    spousePaymentValue: {
        type: String
    },
    spousePaymentAsset: {
        type: String
    },
    spousePaymentTimestamp: {
        type: String
    },
    spousePaymentNotes: {
        type: String
    },

    ihcafePaymentValue: {
        type: String
    },
    ihcafePaymentAsset: {
        type: String
    },
    ihcafePaymentTimeStamp: {
        type: String
    },
    ihcafePaymentNotes: {
        type: String
    },

    numberOfBags: {
        type: String
    }

});

// Creating and Exporting Export Lot Model
module.exports = mongoose.model('ExportLot', exportLotSchema);