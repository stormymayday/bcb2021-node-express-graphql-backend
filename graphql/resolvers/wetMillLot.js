const WetMillLot = require('../../models/wetMillLot');
const WetMillNode = require('../../models/wetMillNode');

module.exports = {

    // Creating a Wet Mill Lot
    createWetMillLot: (args) => {

        // Checking if a Wet Mill Lot with that wetMillLotId already exists in the database (to avoid duplicates)
        return WetMillLot.findOne({ wetMillLotId: args.wetMillLotInput.wetMillLotId })

            .then(wetMillLot => {

                if (wetMillLot) {

                    throw new Error('Wet Mill Lot with that wetMillLotId already exists');

                }
                else {

                    // Creating New Wet Mill Lot 
                    const wetMillLot = new WetMillLot({

                        wetMillNode: '614df09539d15c0d8a8015a9',

                        wetMillLotId: args.wetMillLotInput.wetMillLotId,

                        wetMillNodeId: args.wetMillLotInput.wetMillNodeId,

                        organizationId: args.wetMillLotInput.organizationId,
                        marketplaceId: args.wetMillLotInput.marketplaceId,
                        productId: args.wetMillLotInput.productId,
                        lotName: args.wetMillLotInput.lotName,
                        lotType: args.wetMillLotInput.lotType,
                        lotDetailType: args.wetMillLotInput.lotDetailType,
                        createdDate: args.wetMillLotInput.createdDate,
                        lastModifiedDate: args.wetMillLotInput.lastModifiedDate,
                        productName: args.wetMillLotInput.productName,
                        productToken: args.wetMillLotInput.productToken,
                        productSku: args.wetMillLotInput.productSku,
                        organizationName: args.wetMillLotInput.organizationName,
                        currentWeight: args.wetMillLotInput.currentWeight,
                        currentWeightUnit: args.wetMillLotInput.currentWeightUnit,
                        absorbedWeight: args.wetMillLotInput.absorbedWeight,
                        absorbedWeightUnit: args.wetMillLotInput.absorbedWeightUnit,
                        quality: args.wetMillLotInput.quality,
                        lotIsOpen: args.wetMillLotInput.lotIsOpen,

                        images: args.wetMillLotInput.images,
                        documents: args.wetMillLotInput.documents,
                        videos: args.wetMillLotInput.videos,

                        value: args.wetMillLotInput.value,
                        asset: args.wetMillLotInput.asset,
                        timestamp: args.wetMillLotInput.timestamp,

                        processingDate: args.wetMillLotInput.processingDate

                    });

                    // Placeholder variable for the wetMillLot (initially undefined)
                    let createdWetMillLot;

                    // Saving Wet Mill Lot to the Database
                    return wetMillLot
                        .save()
                        .then(result => {

                            // 
                            createdWetMillLot = { ...result._doc };

                            // Finding Wet Mill Node by ID
                            return WetMillNode.findById('614df09539d15c0d8a8015a9')

                        })
                        .then(wetMillNode => {

                            // If Wet Mill Node with that ID is not found
                            if (!wetMillNode) {

                                throw new Error('Wet Mill Node was not found');

                            }

                            // Adding Wet Mill Lot into wetMillLots array
                            wetMillNode.wetMillLots.push(wetMillLot);

                            // Updating the appropriate Wet Mill Node in the database
                            return wetMillNode.save();

                        })
                        .then(result => {

                            return createdWetMillLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}