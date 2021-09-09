const ImportLot = require('../../models/importLot');
const ImportNode = require('../../models/importNode');

module.exports = {

    // Creating an Import Lot
    createImportLot: (args) => {

        // Checking if an Import Lot with that importLotId already exists in the database (to avoid duplicates)
        return ImportLot.findOne({ importLotId: args.importLotInput.importLotId })

            .then(importLot => {

                if (importLot) {

                    throw new Error('Import Lot with that importLotId already exists');

                }
                else {

                    // Creating New Import Lot 
                    const importLot = new ImportLot({

                        // Claudia & Juan's Import Node ObjectID
                        importNode: '613a2f606f5dc82ac78b2a8d',

                        importLotId: args.importLotInput.importLotId,

                        importNodeId: args.importLotInput.importNodeId,

                        organizationId: args.importLotInput.organizationId,
                        marketplaceId: args.importLotInput.marketplaceId,
                        productId: args.importLotInput.productId,
                        lotName: args.importLotInput.lotName,
                        lotType: args.importLotInput.lotType,
                        lotDetailType: args.importLotInput.lotDetailType,
                        createdDate: args.importLotInput.createdDate,
                        lastModifiedDate: args.importLotInput.lastModifiedDate,
                        productName: args.importLotInput.productName,
                        productToken: args.importLotInput.productToken,
                        productSku: args.importLotInput.productSku,
                        organizationName: args.importLotInput.organizationName,
                        currentWeight: args.importLotInput.currentWeight,
                        currentWeightUnit: args.importLotInput.currentWeightUnit,
                        absorbedWeight: args.importLotInput.absorbedWeight,
                        absorbedWeightUnit: args.importLotInput.absorbedWeightUnit,
                        quality: args.importLotInput.quality,
                        lotIsOpen: args.importLotInput.lotIsOpen,

                        images: args.importLotInput.images,
                        documents: args.importLotInput.documents,
                        videos: args.importLotInput.videos,

                        numberOfBags: args.importLotInput.numberOfBags,
                        damage: args.importLotInput.damage,
                        transferDate: args.importLotInput.transferDate

                    });

                    // Placeholder variable for the importLot (initially undefined)
                    let createdImportLot;

                    // Saving Import Lot to the Database
                    return importLot
                        .save()
                        .then(result => {

                            // 
                            createdImportLot = { ...result._doc };

                            // Finding Import Node by ID
                            return ImportNode.findById('613a2f606f5dc82ac78b2a8d')

                        })
                        .then(importNode => {

                            // If Import Node with that ID is not found
                            if (!importNode) {

                                throw new Error('Import Node was not found');

                            }

                            // Adding Import Lot into importLots array
                            importNode.importLots.push(importLot);

                            // Updating the appropriate Import Node in the database
                            return importNode.save();

                        })
                        .then(result => {

                            return createdImportLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}