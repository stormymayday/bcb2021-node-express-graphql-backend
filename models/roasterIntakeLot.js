const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Roaster Intake Lot Schema
const roasterIntakeLotSchema = new Schema({

    roasterIntakeNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'RoasterIntakeNode'
    },


    roasterIntakeLotId: {
        type: String
    },
    roasterIntakeNodeId: {
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

    numberOfBags: {
        type: String
    },
    damage: {
        type: String
    },
    transferDate: {
        type: String
    },
    receivedDate: {
        type: String
    }

});

// Creating and Exporting the Roaster Intake Lot Model
module.exports = mongoose.model('RoasterIntakeLot', roasterIntakeLotSchema);