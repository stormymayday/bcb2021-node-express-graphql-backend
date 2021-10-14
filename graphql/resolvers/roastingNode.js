const RoastingNode = require('../../models/roastingNode');

module.exports = {

    // Creating a Roasting Node
    createRoastingNode: (args) => {

        // Checking if a Roasting Node with that roastingNodeId already exists in the database (to avoid duplicates)
        return RoastingNode.findOne({ roastingNodeId: args.roastingNodeInput.roastingNodeId })

            .then(roastingNode => {

                if (roastingNode) {


                    throw new Error('Roasting Node with that roastingNodeId already exists');

                }
                else {

                    // Creating New Roasting Node
                    const roastingNode = new RoastingNode({

                        roastingNodeId: args.roastingNodeInput.roastingNodeId,

                        farmer: '613a9694e697483d168be5d4',

                        totaAbsorbedWeight: args.roastingNodeInput.totaAbsorbedWeight,
                        totalAbsorbedWeightUnit: args.roastingNodeInput.totalAbsorbedWeightUnit,

                        organizationId: args.roastingNodeInput.organizationId,
                        marketplaceId: args.roastingNodeInput.marketplaceId,
                        defaultLocationId: args.roastingNodeInput.defaultLocationId,
                        nodeName: args.roastingNodeInput.nodeName,
                        nodeType: args.roastingNodeInput.nodeType,
                        nodeDetailType: args.roastingNodeInput.nodeDetailType,
                        createdDate: args.roastingNodeInput.createdDate,
                        lastModifiedDate: args.roastingNodeInput.lastModifiedDate,
                        organizationName: args.roastingNodeInput.organizationName,
                        images: args.roastingNodeInput.images,
                        videos: args.roastingNodeInput.videos,
                        documents: args.roastingNodeInput.documents,

                        value: args.roastingNodeInput.value,
                        valueUnit: args.roastingNodeInput.valueUnit,
                        unitValue: args.roastingNodeInput.unitValue,
                        unitValueUnit: args.roastingNodeInput.unitValueUnit,

                        locationId: args.roastingNodeInput.locationId,
                        name: args.roastingNodeInput.name,

                        country: args.roastingNodeInput.country,
                        city: args.roastingNodeInput.city,
                        state: args.roastingNodeInput.state,
                        latitude: args.roastingNodeInput.latitude,
                        longitude: args.roastingNodeInput.longitude,
                        elevation: args.roastingNodeInput.elevation,
                        elevationUnit: args.roastingNodeInput.elevationUnit,

                        address: args.roastingNodeInput.address

                    });

                    // Saving Roasting Node to the Database
                    return roastingNode
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