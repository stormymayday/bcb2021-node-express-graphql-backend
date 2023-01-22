const RoastingLot = require('../../models/roastingLot');
const RoastingNode = require('../../models/roastingNode');

module.exports = {

    // Creating a Roasting Lot
    createRoastingLot: (args) => {

        // Checking if a Roasting Lot with that roastingLotId already exists in the database (to avoid duplicates)
        return RoastingLot.findOne({ roastingLotId: args.roastingLotInput.roastingLotId })

            .then(roastingLot => {

                if (roastingLot) {

                    throw new Error('Roasting Lot with that roastingLotInput already exists');

                }
                else {

                    // Creating New Roasting Lot
                    const roastingLot = new RoastingLot({

                        // Claudia 2022
                        roastingNode: '63255116add9b30016ee5004',

                        roastingLotId: args.roastingLotInput.roastingLotId,

                        roastingNodeId: args.roastingLotInput.roastingNodeId,

                        organizationId: args.roastingLotInput.organizationId,
                        marketplaceId: args.roastingLotInput.marketplaceId,
                        productId: args.roastingLotInput.productId,
                        lotName: args.roastingLotInput.lotName,
                        lotType: args.roastingLotInput.lotType,
                        lotDetailType: args.roastingLotInput.lotDetailType,
                        createdDate: args.roastingLotInput.createdDate,
                        lastModifiedDate: args.roastingLotInput.lastModifiedDate,
                        productName: args.roastingLotInput.productName,
                        productToken: args.roastingLotInput.productToken,
                        productSku: args.roastingLotInput.productSku,
                        organizationName: args.roastingLotInput.organizationName,
                        currentWeight: args.roastingLotInput.currentWeight,
                        currentWeightUnit: args.roastingLotInput.currentWeightUnit,
                        absorbedWeight: args.roastingLotInput.absorbedWeight,
                        absorbedWeightUnit: args.roastingLotInput.absorbedWeightUnit,
                        quality: args.roastingLotInput.quality,
                        lotIsOpen: args.roastingLotInput.lotIsOpen,

                        images: args.roastingLotInput.images,
                        documents: args.roastingLotInput.documents,
                        videos: args.roastingLotInput.videos,

                        roasterActor: args.roastingLotInput.roasterActor,
                        roastDate: args.roastingLotInput.roastDate,
                        chargeTemperature: args.roastingLotInput.chargeTemperature,
                        dropTemperature: args.roastingLotInput.dropTemperature,
                        totalRoastTime: args.roastingLotInput.totalRoastTime,
                        roastType: args.roastingLotInput.roastType,
                        roastLossQuantity: args.roastingLotInput.roastLossQuantity,
                        roastingNotes: args.roastingLotInput.roastingNotes,
                        tastingNotes: args.roastingLotInput.tastingNotes,

                        cuppingScore: args.roastingLotInput.cuppingScore

                    });

                    // Placeholder variable for the roastingLot (initially undefined)
                    let createdRoastingLot;

                    // Saving Roasting Lot to the Database
                    return roastingLot
                        .save()
                        .then(result => {

                            // 
                            createdRoastingLot = { ...result._doc };

                            // Finding Roasting Node by ID
                            return RoastingNode.findById('63255116add9b30016ee5004')

                        })
                        .then(roastingNode => {

                            // If Roasting Node with that ID is not found
                            if (!roastingNode) {

                                throw new Error('Roasting Node was not found');

                            }

                            // Adding Roasting Lot into roastingLots array
                            roastingNode.roastingLots.unshift(roastingLot);

                            // Updating the appropriate Roasting Node in the database
                            return roastingNode.save();

                        })
                        .then(result => {

                            return createdRoastingLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}