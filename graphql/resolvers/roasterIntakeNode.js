const RoasterIntakeNode = require('../../models/roasterIntakeNode');

module.exports = {

    // Creating an Roaster Intake Node
    createRoasterIntakeNode: (args) => {

        // Checking if an Roaster Intake Node with that roasterIntakeNodeId already exists in the database (to avoid duplicates)
        return RoasterIntakeNode.findOne({ roasterIntakeNodeId: args.roasterIntakeNodeInput.roasterIntakeNodeId })

            .then(roasterIntakeNode => {

                if (roasterIntakeNode) {


                    throw new Error('Roaster Intake Node with that roasterIntakeNodeId already exists');

                }
                else {

                    // Creating New Roaster Intake Node Node
                    const roasterIntakeNode = new RoasterIntakeNode({

                        tagline: args.roasterIntakeNodeInput.tagline,
                        websiteUrl: args.roasterIntakeNodeInput.websiteUrl,

                        roasterIntakeNodeId: args.roasterIntakeNodeInput.roasterIntakeNodeId,

                        // Mario 2022
                        farmer: '634341ebd23e4deb333dd2af',

                        totaAbsorbedWeight: args.roasterIntakeNodeInput.totaAbsorbedWeight,
                        totalAbsorbedWeightUnit: args.roasterIntakeNodeInput.totalAbsorbedWeightUnit,

                        organizationId: args.roasterIntakeNodeInput.organizationId,
                        marketplaceId: args.roasterIntakeNodeInput.marketplaceId,
                        defaultLocationId: args.roasterIntakeNodeInput.defaultLocationId,
                        nodeName: args.roasterIntakeNodeInput.nodeName,
                        nodeType: args.roasterIntakeNodeInput.nodeType,
                        nodeDetailType: args.roasterIntakeNodeInput.nodeDetailType,
                        createdDate: args.roasterIntakeNodeInput.createdDate,
                        lastModifiedDate: args.roasterIntakeNodeInput.lastModifiedDate,
                        organizationName: args.roasterIntakeNodeInput.organizationName,
                        images: args.roasterIntakeNodeInput.images,
                        videos: args.roasterIntakeNodeInput.videos,
                        documents: args.roasterIntakeNodeInput.documents,

                        value: args.roasterIntakeNodeInput.value,
                        valueUnit: args.roasterIntakeNodeInput.valueUnit,
                        unitValue: args.roasterIntakeNodeInput.unitValue,
                        unitValueUnit: args.roasterIntakeNodeInput.unitValueUnit,

                        locationId: args.roasterIntakeNodeInput.locationId,
                        name: args.roasterIntakeNodeInput.name,

                        country: args.roasterIntakeNodeInput.country,
                        city: args.roasterIntakeNodeInput.city,
                        state: args.roasterIntakeNodeInput.state,
                        latitude: args.roasterIntakeNodeInput.latitude,
                        longitude: args.roasterIntakeNodeInput.longitude,
                        elevation: args.roasterIntakeNodeInput.elevation,
                        elevationUnit: args.roasterIntakeNodeInput.elevationUnit,

                        address: args.roasterIntakeNodeInput.address

                    });

                    // Saving Roaster Intake Node to the Database
                    return roasterIntakeNode
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