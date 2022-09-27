const ExporterIntakeLot = require('../../models/exporterIntakeLot');
const ExporterIntakeNode = require('../../models/exporterIntakeNode');

module.exports = {

    // Creating an Exporter Intake Lot
    createExporterIntakeLot: (args) => {

        // Checking if an Exporter Intake Lot with that exporterIntakeLotId already exists in the database (to avoid duplicates)
        return ExporterIntakeLot.findOne({ exporterIntakeLotId: args.exporterIntakeLotInput.exporterIntakeLotId })

            .then(exporterIntakeLot => {

                if (exporterIntakeLot) {

                    throw new Error('Exporter Intake Lot with that exporterIntakeLotId already exists');

                }
                else {

                    // Creating New Exporter Intake Lot 
                    const exporterIntakeLot = new ExporterIntakeLot({

                        // Claudia 2022
                        exporterIntakeNode: '633257be14b2ab0016a04e7a',

                        exporterIntakeLotId: args.exporterIntakeLotInput.exporterIntakeLotId,

                        exporterIntakeNodeId: args.exporterIntakeLotInput.exporterIntakeNodeId,

                        organizationId: args.exporterIntakeLotInput.organizationId,
                        marketplaceId: args.exporterIntakeLotInput.marketplaceId,
                        productId: args.exporterIntakeLotInput.productId,
                        lotName: args.exporterIntakeLotInput.lotName,
                        lotType: args.exporterIntakeLotInput.lotType,
                        lotDetailType: args.exporterIntakeLotInput.lotDetailType,
                        createdDate: args.exporterIntakeLotInput.createdDate,
                        lastModifiedDate: args.exporterIntakeLotInput.lastModifiedDate,
                        productName: args.exporterIntakeLotInput.productName,
                        productToken: args.exporterIntakeLotInput.productToken,
                        productSku: args.exporterIntakeLotInput.productSku,
                        organizationName: args.exporterIntakeLotInput.organizationName,
                        currentWeight: args.exporterIntakeLotInput.currentWeight,
                        currentWeightUnit: args.exporterIntakeLotInput.currentWeightUnit,
                        absorbedWeight: args.exporterIntakeLotInput.absorbedWeight,
                        absorbedWeightUnit: args.exporterIntakeLotInput.absorbedWeightUnit,
                        quality: args.exporterIntakeLotInput.quality,
                        lotIsOpen: args.exporterIntakeLotInput.lotIsOpen,

                        images: args.exporterIntakeLotInput.images,
                        documents: args.exporterIntakeLotInput.documents,
                        videos: args.exporterIntakeLotInput.videos,

                        value: args.exporterIntakeLotInput.value,
                        asset: args.exporterIntakeLotInput.asset,
                        timestamp: args.exporterIntakeLotInput.timestamp,

                        processingDate: args.exporterIntakeLotInput.processingDate

                    });

                    // Placeholder variable for the wetMillLot (initially undefined)
                    let createdExporterIntakeLot;

                    // Saving Wet Mill Lot to the Database
                    return exporterIntakeLot
                        .save()
                        .then(result => {

                            // 
                            createdExporterIntakeLot = { ...result._doc };

                            // Finding Exporter Intake Node by ID
                            return ExporterIntakeNode.findById('633257be14b2ab0016a04e7a');

                        })
                        .then(exporterIntakeNode => {

                            // If Exporter Intake Node with that ID is not found
                            if (!exporterIntakeNode) {

                                throw new Error('Exporter Intake Node was not found');

                            }

                            // Adding Exporter Intake Lot into exporterIntakeLots array
                            exporterIntakeNode.exporterIntakeLots.push(exporterIntakeLot);

                            // Updating the appropriate Exporter Intake Node in the database
                            return exporterIntakeNode.save();

                        })
                        .then(result => {

                            return createdExporterIntakeLot;

                        })
                        .catch(err => {

                            throw err;

                        })

                }

            });

    }

}