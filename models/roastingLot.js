const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Roasting Lot Schema
const roastingLotSchema = new Schema({

    roastingNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'RoastingNode'
    },


    roastingLotId: {
        type: String
    },
    roastingNodeId: {
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

    roastLossPercentage: {
        type: String
    },
    roastLossQuantity: {
        type: String
    },
    transferDate: {
        type: String
    },
    roasterActor: {
        type: String
    },
    roastDate: {
        type: String
    },
    varietal: {
        type: String
    },
    roastType: {
        type: String
    },
    cuppingScore: {
        type: String
    },
    cuppersNotes: {
        type: String
    },
    roastingNotes: {
        type: String
    }

});

// Creating and Exporting the Roasting Lot Model
module.exports = mongoose.model('RoastingLot', roastingLotSchema);