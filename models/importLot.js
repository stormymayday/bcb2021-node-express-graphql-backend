const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Import Lot Schema
const importLotSchema = new Schema({

    importNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'ImportNode'
    },


    importLotId: {
        type: String
    },
    importNodeId: {
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

    fobBasePaymentValue: {
        type: String
    },
    fobBasePaymentAsset: {
        type: String
    },
    fobBasePaymentTimeStamp: {
        type: String
    },
    fobBasePaymentNotes: {
        type: String
    },

    fobPremiumPaymentValue: {
        type: String
    },
    fobPremiumPaymentAsset: {
        type: String
    },
    fobPremiumPaymentTimestamp: {
        type: String
    },
    fobPremiumPaymentNotes: {
        type: String
    },

    catrachaCommunityContributionPaymentValue: {
        type: String
    },
    catrachaCommunityContributionPaymentAsset: {
        type: String
    },
    catrachaCommunityContributionPaymentTimeStamp: {
        type: String
    },
    catrachaCommunityContributionPaymentNotes: {
        type: String
    },

    numberOfBags: {
        type: String
    },
    damage: {
        type: String
    },
    transferDate: {
        type: String
    }

});

// Creating and Exporting Import Lot Model
module.exports = mongoose.model('ImportLot', importLotSchema);