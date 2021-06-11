// Importing Mongoose Models
const HarvestNode = require('../../models/harvestNode');

module.exports = {

    // Creating a Harvest Node
    createHarvestNode: (args) => {

        // Checking if a Harvest Node with that harvestNodeId already exists in the database (to avoid duplicates)
        return HarvestNode.findOne({ harvestNodeId: args.harvestNodeInput.harvestNodeId })

            .then(harvestNode => {

                if (harvestNode) {

                    throw new Error('Harvest Node with that harvestNodeId already exists');

                }
                else {

                    // Creating New Harvest Node
                    const harvestNode = new HarvestNode({

                        harvestNodeId: args.harvestNodeInput.harvestNodeId,
                        farmer: '60c3676f17af3273425d935b',

                        totaAbsorbedWeight: args.harvestNodeInput.totaAbsorbedWeight,
                        totalAbsorbedWeightUnit: args.harvestNodeInput.totalAbsorbedWeightUnit,

                        organizationId: args.harvestNodeInput.organizationId,
                        marketplaceId: args.harvestNodeInput.marketplaceId,
                        defaultLocationId: args.harvestNodeInput.defaultLocationId,
                        nodeName: args.harvestNodeInput.nodeName,
                        nodeType: args.harvestNodeInput.nodeType,
                        nodeDetailType: args.harvestNodeInput.nodeDetailType,
                        createdDate: args.harvestNodeInput.createdDate,
                        lastModifiedDate: args.harvestNodeInput.lastModifiedDate,
                        organizationName: args.harvestNodeInput.organizationName,
                        images: args.harvestNodeInput.images,
                        videos: args.harvestNodeInput.videos,
                        documents: args.harvestNodeInput.documents,

                        country: args.harvestNodeInput.country,
                        city: args.harvestNodeInput.city,
                        state: args.harvestNodeInput.state,
                        latitude: args.harvestNodeInput.latitude,
                        longitude: args.harvestNodeInput.longitude,
                        elevation: args.harvestNodeInput.elevation,
                        elevationUnit: args.harvestNodeInput.elevationUnit

                    });

                    // Saving Harvest Node to the Database
                    return harvestNode
                        .save()
                        .then(result => {

                            return { ...result._doc };

                        })
                        .catch(err => {
                            console.log(err);
                            throw err;
                        });

                }

            });

    }
}