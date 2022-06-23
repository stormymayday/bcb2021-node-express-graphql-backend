const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Finished Product Lot Schema
const finishedProductLotSchema = new Schema({

    finishedProductNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'FinishedProductNode'
    },


    finishedProductLotId: {
        type: String
    },
    finishedProductNodeId: {
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

    thirdPaymentValue: {
        type: String
    },
    thirdPaymentAsset: {
        type: String
    },
    thirdPaymentTimeStamp: {
        type: String
    },
    thirdPaymentNotes: {
        type: String
    }

});

// Creating and Exporting Finished Product Lot Model
module.exports = mongoose.model('FinishedProductLot', finishedProductLotSchema);