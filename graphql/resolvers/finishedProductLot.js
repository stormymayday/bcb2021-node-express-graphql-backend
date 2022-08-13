const FinishedProductLot = require('../../models/finishedProductLot');
const FinishedProductNode = require('../../models/finishedProductNode');

module.exports = {

    // Creating an Finished Product Lot
    createFinishedProductLot: (args) => {

        // Checking if an Finished Product Lot with that finishedProductLotId already exists in the database (to avoid duplicates)
        return FinishedProductLot.findOne({ finishedProductLotId: args.finishedProductLotInput.finishedProductLotId })

            .then(finishedProductLot => {

                if (finishedProductLot) {

                    throw new Error('Finished Product Lot with that finishedProductLotId already exists');

                }
                else {

                    // Creating New Finished Product Lot
                    const finishedProductLot = new FinishedProductLot({

                        // Claudia
                        finishedProductNode: '62f68588a9c6c30016f1907b',

                        finishedProductLotId: args.finishedProductLotInput.finishedProductLotId,

                        finishedProductNodeId: args.finishedProductLotInput.finishedProductNodeId,

                        organizationId: args.finishedProductLotInput.organizationId,
                        marketplaceId: args.finishedProductLotInput.marketplaceId,
                        productId: args.finishedProductLotInput.productId,
                        lotName: args.finishedProductLotInput.lotName,
                        lotType: args.finishedProductLotInput.lotType,
                        lotDetailType: args.finishedProductLotInput.lotDetailType,
                        createdDate: args.finishedProductLotInput.createdDate,
                        lastModifiedDate: args.finishedProductLotInput.lastModifiedDate,
                        productName: args.finishedProductLotInput.productName,
                        productToken: args.finishedProductLotInput.productToken,
                        productSku: args.finishedProductLotInput.productSku,
                        organizationName: args.finishedProductLotInput.organizationName,
                        currentWeight: args.finishedProductLotInput.currentWeight,
                        currentWeightUnit: args.finishedProductLotInput.currentWeightUnit,
                        absorbedWeight: args.finishedProductLotInput.absorbedWeight,
                        absorbedWeightUnit: args.finishedProductLotInput.absorbedWeightUnit,
                        quality: args.finishedProductLotInput.quality,
                        lotIsOpen: args.finishedProductLotInput.lotIsOpen,

                        images: args.finishedProductLotInput.images,
                        documents: args.finishedProductLotInput.documents,
                        videos: args.finishedProductLotInput.videos,

                        thirdPaymentValue: args.finishedProductLotInput.thirdPaymentValue,
                        thirdPaymentAsset: args.finishedProductLotInput.thirdPaymentAsset,
                        thirdPaymentTimeStamp: args.finishedProductLotInput.thirdPaymentTimeStamp,
                        thirdPaymentNotes: args.finishedProductLotInput.thirdPaymentNotes,

                    });

                    // Placeholder variable for the finishedProductLot (initially undefined)
                    let createdFinishedProductLot;

                    // Saving Finished Product Lot to the Database
                    return finishedProductLot
                        .save()
                        .then(result => {

                            // 
                            createdFinishedProductLot = { ...result._doc };

                            // Finding Finished Product Node by ID
                            return FinishedProductNode.findById('62f68588a9c6c30016f1907b')

                        })
                        .then(finishedProductNode => {

                            // If Finished Product Node with that ID is not found
                            if (!finishedProductNode) {

                                throw new Error('Finished Product Node was not found');

                            }

                            // Adding Finished Product Lot into finishedProductLots array
                            finishedProductNode.finishedProductLots.push(finishedProductLot);

                            // Updating the appropriate Finished Product Node in the database
                            return finishedProductNode.save();

                        })
                        .then(result => {

                            return createdFinishedProductLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}