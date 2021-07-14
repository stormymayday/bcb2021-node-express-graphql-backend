const DryMillNode = require('../../models/dryMillNode');

module.exports = {

    // Creating a Dry Mill Node
    createDryMillNode: (args) => {

        // Checking if a Dry Mill Node with that dryMillNodeId already exists in the database (to avoid duplicates)
        // return DryMillNode.findOne({ dryMillNodeId: args.dryMillNodeInput.dryMillNodeId })

        //     .then(dryMillNode => {

        //         if (dryMillNode) {

        //             throw new Error('Dry Mill Node with that dryMillNodeId already exists');

        //         }
        //         else {

        // Creating New Dry Mill Node
        const dryMillNode = new DryMillNode({

            dryMillNodeId: args.dryMillNodeInput.dryMillNodeId,

            farmer: '60eb7fe31bc2c19311e8419f',

            totaAbsorbedWeight: args.dryMillNodeInput.totaAbsorbedWeight,
            totalAbsorbedWeightUnit: args.dryMillNodeInput.totalAbsorbedWeightUnit,

            organizationId: args.dryMillNodeInput.organizationId,
            marketplaceId: args.dryMillNodeInput.marketplaceId,
            defaultLocationId: args.dryMillNodeInput.defaultLocationId,
            nodeName: args.dryMillNodeInput.nodeName,
            nodeType: args.dryMillNodeInput.nodeType,
            nodeDetailType: args.dryMillNodeInput.nodeDetailType,
            createdDate: args.dryMillNodeInput.createdDate,
            lastModifiedDate: args.dryMillNodeInput.lastModifiedDate,
            organizationName: args.dryMillNodeInput.organizationName,
            images: args.dryMillNodeInput.images,
            videos: args.dryMillNodeInput.videos,
            documents: args.dryMillNodeInput.documents,

            country: args.dryMillNodeInput.country,
            city: args.dryMillNodeInput.city,
            state: args.dryMillNodeInput.state,
            latitude: args.dryMillNodeInput.latitude,
            longitude: args.dryMillNodeInput.longitude,
            elevation: args.dryMillNodeInput.elevation,
            elevationUnit: args.dryMillNodeInput.elevationUnit

        });

        // Saving Dry Mill Node to the Database
        return dryMillNode
            .save()
            .then(result => {

                return { ...result._doc };

            })
            .catch(err => {
                console.log(err);
                throw err;
            });

        //     }

        // });

    }
}