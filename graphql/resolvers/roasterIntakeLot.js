const RoasterIntakeLot = require('../../models/roasterIntakeLot');
const RoasterIntakeNode = require('../../models/roasterIntakeNode');

module.exports = {

    // Creating an Roaster Intake Lot
    createRoasterIntakeLot: (args) => {

        // Checking if an Roaster Intake Lot with that roasterIntakeLotId already exists in the database (to avoid duplicates)
        return RoasterIntakeLot.findOne({ roasterIntakeLotId: args.roasterIntakeLotInput.roasterIntakeLotId })

            .then(roasterIntakeLot => {

                if (roasterIntakeLot) {

                    throw new Error('Roaster Intake Lot with that roasterIntakeLotId already exists');

                }
                else {

                    // Creating New Roaster Intake Lot
                    const roasterIntakeLot = new RoasterIntakeLot({

                        roasterIntakeNode: '6153c6534d9f1599ad008762',

                        roasterIntakeLotId: args.roasterIntakeLotInput.roasterIntakeLotId,

                        roasterIntakeNodeId: args.roasterIntakeLotInput.roasterIntakeNodeId,

                        organizationId: args.roasterIntakeLotInput.organizationId,
                        marketplaceId: args.roasterIntakeLotInput.marketplaceId,
                        productId: args.roasterIntakeLotInput.productId,
                        lotName: args.roasterIntakeLotInput.lotName,
                        lotType: args.roasterIntakeLotInput.lotType,
                        lotDetailType: args.roasterIntakeLotInput.lotDetailType,
                        createdDate: args.roasterIntakeLotInput.createdDate,
                        lastModifiedDate: args.roasterIntakeLotInput.lastModifiedDate,
                        productName: args.roasterIntakeLotInput.productName,
                        productToken: args.roasterIntakeLotInput.productToken,
                        productSku: args.roasterIntakeLotInput.productSku,
                        organizationName: args.roasterIntakeLotInput.organizationName,
                        currentWeight: args.roasterIntakeLotInput.currentWeight,
                        currentWeightUnit: args.roasterIntakeLotInput.currentWeightUnit,
                        absorbedWeight: args.roasterIntakeLotInput.absorbedWeight,
                        absorbedWeightUnit: args.roasterIntakeLotInput.absorbedWeightUnit,
                        quality: args.roasterIntakeLotInput.quality,
                        lotIsOpen: args.roasterIntakeLotInput.lotIsOpen,

                        images: args.roasterIntakeLotInput.images,
                        documents: args.roasterIntakeLotInput.documents,
                        videos: args.roasterIntakeLotInput.videos,

                        numberOfBags: args.roasterIntakeLotInput.numberOfBags,
                        damage: args.roasterIntakeLotInput.damage,
                        transferDate: args.roasterIntakeLotInput.transferDate,
                        receivedDate: args.roasterIntakeLotInput.receivedDate

                    });

                    // Placeholder variable for the roasterIntakeLot (initially undefined)
                    let createdRoasterIntakeLot;

                    // Saving Roaster Intake Lot to the Database
                    return roasterIntakeLot
                        .save()
                        .then(result => {

                            // 
                            createdRoasterIntakeLot = { ...result._doc };

                            // Finding Roaster Intake Node by ID
                            return RoasterIntakeNode.findById('6153c6534d9f1599ad008762')

                        })
                        .then(roasterIntakeNode => {

                            // If Roaster Intake Node with that ID is not found
                            if (!roasterIntakeNode) {

                                throw new Error('Roaster Intake Node was not found');

                            }

                            // Adding Roaster Intake Lot into roasterIntakeLots array
                            roasterIntakeNode.roasterIntakeLots.push(roasterIntakeLot);

                            // Updating the appropriate Roaster Intake Node in the database
                            return roasterIntakeNode.save();

                        })
                        .then(result => {

                            return createdRoasterIntakeLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}