const ExportLot = require('../../models/exportLot');
const ExportNode = require('../../models/exportNode');

module.exports = {

    // Creating an Export Lot
    createExportLot: (args) => {

        // Checking if an Export Lot with that exportLotId already exists in the database (to avoid duplicates)
        return ExportLot.findOne({ exportLotId: args.exportLotInput.exportLotId })

            .then(exportLot => {

                if (exportLot) {

                    throw new Error('Export Lot with that exportLotId already exists');

                }
                else {

                    // Creating New Export Lot 
                    const exportLot = new ExportLot({

                        // Luis
                        exportNode: '613bc34dda1548532fad78fb',

                        exportLotId: args.exportLotInput.exportLotId,

                        exportNodeId: args.exportLotInput.exportNodeId,

                        organizationId: args.exportLotInput.organizationId,
                        marketplaceId: args.exportLotInput.marketplaceId,
                        productId: args.exportLotInput.productId,
                        lotName: args.exportLotInput.lotName,
                        lotType: args.exportLotInput.lotType,
                        lotDetailType: args.exportLotInput.lotDetailType,
                        createdDate: args.exportLotInput.createdDate,
                        lastModifiedDate: args.exportLotInput.lastModifiedDate,
                        productName: args.exportLotInput.productName,
                        productToken: args.exportLotInput.productToken,
                        productSku: args.exportLotInput.productSku,
                        organizationName: args.exportLotInput.organizationName,
                        currentWeight: args.exportLotInput.currentWeight,
                        currentWeightUnit: args.exportLotInput.currentWeightUnit,
                        absorbedWeight: args.exportLotInput.absorbedWeight,
                        absorbedWeightUnit: args.exportLotInput.absorbedWeightUnit,
                        quality: args.exportLotInput.quality,
                        lotIsOpen: args.exportLotInput.lotIsOpen,

                        images: args.exportLotInput.images,
                        documents: args.exportLotInput.documents,
                        videos: args.exportLotInput.videos,

                        secondPaymentValue: args.exportLotInput.secondPaymentValue,
                        secondPaymentAsset: args.exportLotInput.secondPaymentAsset,
                        secondPaymentTimeStamp: args.exportLotInput.secondPaymentTimeStamp,
                        secondPaymentNotes: args.exportLotInput.secondPaymentNotes,

                        spousePaymentValue: args.exportLotInput.spousePaymentValue,
                        spousePaymentAsset: args.exportLotInput.spousePaymentAsset,
                        spousePaymentTimestamp: args.exportLotInput.spousePaymentTimestamp,
                        spousePaymentNotes: args.exportLotInput.spousePaymentNotes,

                        ihcafePaymentValue: args.exportLotInput.ihcafePaymentValue,
                        ihcafePaymentAsset: args.exportLotInput.ihcafePaymentAsset,
                        ihcafePaymentTimeStamp: args.exportLotInput.ihcafePaymentTimeStamp,
                        ihcafePaymentNotes: args.exportLotInput.ihcafePaymentNotes,

                        numberOfBags: args.exportLotInput.numberOfBags

                    });

                    // Placeholder variable for the exportLot (initially undefined)
                    let createdExportLot;

                    // Saving Export Lot to the Database
                    return exportLot
                        .save()
                        .then(result => {

                            // 
                            createdExportLot = { ...result._doc };

                            // Finding Export Node by ID
                            return ExportNode.findById('613bc34dda1548532fad78fb')

                        })
                        .then(exportNode => {

                            // If Export Node with that ID is not found
                            if (!exportNode) {

                                throw new Error('Export Node was not found');

                            }

                            // Adding Export Lot into exportLots array
                            exportNode.exportLots.push(exportLot);

                            // Updating the appropriate Export Node in the database
                            return exportNode.save();

                        })
                        .then(result => {

                            return createdExportLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}