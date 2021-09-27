const DryMillLot = require('../../models/dryMillLot');
const DryMillNode = require('../../models/dryMillNode');

module.exports = {

    // Creating a Dry Mill Lot
    createDryMillLot: (args) => {

        // Checking if a Dry Mill Lot with that dryMillLotId already exists in the database (to avoid duplicates)
        return DryMillLot.findOne({ dryMillLotId: args.dryMillLotInput.dryMillLotId })

            .then(dryMillLot => {

                if (dryMillLot) {

                    throw new Error('Dry Mill Lot with that dryMillLotId already exists');

                }
                else {

                    // Creating New Dry Mill Lot 
                    const dryMillLot = new DryMillLot({

                        dryMillNode: '61512f3e49856380ff7d78ca',

                        dryMillLotId: args.dryMillLotInput.dryMillLotId,

                        dryMillNodeId: args.dryMillLotInput.dryMillNodeId,

                        organizationId: args.dryMillLotInput.organizationId,
                        marketplaceId: args.dryMillLotInput.marketplaceId,
                        productId: args.dryMillLotInput.productId,
                        lotName: args.dryMillLotInput.lotName,
                        lotType: args.dryMillLotInput.lotType,
                        lotDetailType: args.dryMillLotInput.lotDetailType,
                        createdDate: args.dryMillLotInput.createdDate,
                        lastModifiedDate: args.dryMillLotInput.lastModifiedDate,
                        productName: args.dryMillLotInput.productName,
                        productToken: args.dryMillLotInput.productToken,
                        productSku: args.dryMillLotInput.productSku,
                        organizationName: args.dryMillLotInput.organizationName,
                        currentWeight: args.dryMillLotInput.currentWeight,
                        currentWeightUnit: args.dryMillLotInput.currentWeightUnit,
                        absorbedWeight: args.dryMillLotInput.absorbedWeight,
                        absorbedWeightUnit: args.dryMillLotInput.absorbedWeightUnit,
                        quality: args.dryMillLotInput.quality,
                        lotIsOpen: args.dryMillLotInput.lotIsOpen,

                        images: args.dryMillLotInput.images,
                        documents: args.dryMillLotInput.documents,
                        videos: args.dryMillLotInput.videos,

                        value: args.dryMillLotInput.value,
                        asset: args.dryMillLotInput.asset,
                        timestamp: args.dryMillLotInput.timestamp,

                        processingDate: args.dryMillLotInput.processingDate

                    });

                    // Placeholder variable for the dryMillLot (initially undefined)
                    let createdDryMillLot;

                    // Saving Dry Mill Lot to the Database
                    return dryMillLot
                        .save()
                        .then(result => {

                            // 
                            createdDryMillLot = { ...result._doc };

                            // Finding Dry Mill Node by ID
                            return DryMillNode.findById('61512f3e49856380ff7d78ca')

                        })
                        .then(dryMillNode => {

                            // If Dry Mill Node with that ID is not found
                            if (!dryMillNode) {

                                throw new Error('Dry Mill Node was not found');

                            }

                            // Adding Dry Mill Lot into dryMillLots array
                            dryMillNode.dryMillLots.push(dryMillLot);

                            // Updating the appropriate Dry Mill Node in the database
                            return dryMillNode.save();

                        })
                        .then(result => {

                            return createdDryMillLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}