const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Harvest Lot Schema
const harvestLotSchema = new Schema({

    harvestNode: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'HarvestNode'
    },


    harvestLotId: {
        type: String
    },
    harvestNodeId: {
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

    ammountPaid: {
        type: String
    },
    currency: {
        type: String
    },

    coffeeVarietal: {
        type: String
    },

    harvestDate: {
        type: String
    }

});

// Creating and Exporting Harvest Lot Model
module.exports = mongoose.model('HarvestLot', harvestLotSchema);