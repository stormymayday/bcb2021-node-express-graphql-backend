const WetMillNode = require('../../models/wetMillNode');

module.exports = {

    // Creating a Wet Mill Node
    createWetMillNode: (args) => {

        // Checking if a Wet Mill Node with that wetMillNodeId already exists in the database (to avoid duplicates)
        return WetMillNode.findOne({ wetMillNodeId: args.wetMillNodeInput.wetMillNodeId })

            .then(wetMillNode => {

                if (wetMillNode) {

                    throw new Error('Wet Mill Node with that wetMillNodeId already exists');

                }
                else {

                    // Creating New Wet Mill Node
                    const wetMillNode = new WetMillNode({

                        wetMillNodeId: args.wetMillNodeInput.wetMillNodeId,

                        farmer: '60c3676f17af3273425d935b',

                        totaAbsorbedWeight: args.wetMillNodeInput.totaAbsorbedWeight,
                        totalAbsorbedWeightUnit: args.wetMillNodeInput.totalAbsorbedWeightUnit,

                        organizationId: args.wetMillNodeInput.organizationId,
                        marketplaceId: args.wetMillNodeInput.marketplaceId,
                        defaultLocationId: args.wetMillNodeInput.defaultLocationId,
                        nodeName: args.wetMillNodeInput.nodeName,
                        nodeType: args.wetMillNodeInput.nodeType,
                        nodeDetailType: args.wetMillNodeInput.nodeDetailType,
                        createdDate: args.wetMillNodeInput.createdDate,
                        lastModifiedDate: args.wetMillNodeInput.lastModifiedDate,
                        organizationName: args.wetMillNodeInput.organizationName,
                        images: args.wetMillNodeInput.images,
                        videos: args.wetMillNodeInput.videos,
                        documents: args.wetMillNodeInput.documents,

                        country: args.wetMillNodeInput.country,
                        city: args.wetMillNodeInput.city,
                        state: args.wetMillNodeInput.state,
                        latitude: args.wetMillNodeInput.latitude,
                        longitude: args.wetMillNodeInput.longitude,
                        elevation: args.wetMillNodeInput.elevation,
                        elevationUnit: args.wetMillNodeInput.elevationUnit

                    });

                    // Saving Wet Mill Node to the Database
                    return wetMillNode
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