// Importing Mongoose Models
const HarvestLot = require('../../models/harvestLot');
const HarvestNode = require('../../models/harvestNode');

module.exports = {

    // Creating a Harvest Lot
    createHarvestLot: (args) => {

        // Checking if a Harvest Lot with that harvestLotId already exists in the database (to avoid duplicates)
        return HarvestLot.findOne({ harvestLotId: args.harvestLotInput.harvestLotId })

            .then(harvestLot => {

                if (harvestLot) {

                    throw new Error('Harvest Lot with that harvestLotId already exists');

                }
                else {

                    // Creating New Harvest 
                    const harvestLot = new HarvestLot({

                        harvestNode: '617de8b062fc0c7882177d5e',

                        harvestLotId: args.harvestLotInput.harvestLotId,

                        harvestNodeId: args.harvestLotInput.harvestNodeId,


                        organizationId: args.harvestLotInput.organizationId,
                        marketplaceId: args.harvestLotInput.marketplaceId,
                        productId: args.harvestLotInput.productId,
                        lotName: args.harvestLotInput.lotName,
                        lotType: args.harvestLotInput.lotType,
                        lotDetailType: args.harvestLotInput.lotDetailType,
                        createdDate: args.harvestLotInput.createdDate,
                        lastModifiedDate: args.harvestLotInput.lastModifiedDate,
                        productName: args.harvestLotInput.productName,
                        productToken: args.harvestLotInput.productToken,
                        productSku: args.harvestLotInput.productSku,
                        organizationName: args.harvestLotInput.organizationName,
                        currentWeight: args.harvestLotInput.currentWeight,
                        currentWeightUnit: args.harvestLotInput.currentWeightUnit,
                        absorbedWeight: args.harvestLotInput.absorbedWeight,
                        absorbedWeightUnit: args.harvestLotInput.absorbedWeightUnit,
                        quality: args.harvestLotInput.quality,
                        lotIsOpen: args.harvestLotInput.lotIsOpen,

                        images: args.harvestLotInput.images,
                        documents: args.harvestLotInput.documents,
                        videos: args.harvestLotInput.videos,

                        value: args.harvestLotInput.value,
                        asset: args.harvestLotInput.asset,
                        timestamp: args.harvestLotInput.timestamp,

                        coffeeVarietal: args.harvestLotInput.coffeeVarietal,

                        harvestDate: args.harvestLotInput.harvestDate

                    });

                    // Placeholder variable for the harvestLot (initially undefined)
                    let createdHarvestLot;

                    // Saving Harvest Lot to the Database
                    return harvestLot
                        .save()
                        .then(result => {

                            // 
                            createdHarvestLot = { ...result._doc };

                            // Finding Harvest Node by ID
                            return HarvestNode.findById('617de8b062fc0c7882177d5e')

                        })
                        .then(harvestNode => {

                            // If Harvest Node with that ID is not found
                            if (!harvestNode) {

                                throw new Error('Harvest Node was not found');

                            }

                            // Adding Harvest Lot into harvestLots array
                            harvestNode.harvestLots.push(harvestLot);

                            // Updating the appropriate Harvest Node in the database
                            return harvestNode.save();

                        })
                        .then(result => {

                            return createdHarvestLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}