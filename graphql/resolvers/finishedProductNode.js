const FinishedProductNode = require('../../models/finishedProductNode');

module.exports = {

    // Creating an finished Product Node
    createFinishedProductNode: (args) => {

        // Checking if a  Finished Product Node with that finishedProductNodeId already exists in the database (to avoid duplicates)
        // return FinishedProductNode.findOne({ finishedProductNodeId: args.finishedProductNodeInput.finishedProductNodeId })

        //     .then(finishedProductNode => {

        //         if (finishedProductNode) {

        //             throw new Error('Finished Product Node with that finishedProductNodeId already exists');

        //         }
        //         else {

        // Creating New Finished Product Node
        const finishedProductNode = new FinishedProductNode({

            // Claudia & Juan
            farmer: '60eb7fe31bc2c19311e8419f',

            totaAbsorbedWeight: args.finishedProductNodeInput.totaAbsorbedWeight,
            totalAbsorbedWeightUnit: args.finishedProductNodeInput.totalAbsorbedWeightUnit,

            finishedProductNodeId: args.finishedProductNodeInput.finishedProductNodeId,

            organizationId: args.finishedProductNodeInput.organizationId,
            marketplaceId: args.finishedProductNodeInput.marketplaceId,
            defaultLocationId: args.finishedProductNodeInput.defaultLocationId,
            nodeName: args.finishedProductNodeInput.nodeName,
            nodeType: args.finishedProductNodeInput.nodeType,
            nodeDetailType: args.finishedProductNodeInput.nodeDetailType,
            createdDate: args.finishedProductNodeInput.createdDate,
            lastModifiedDate: args.finishedProductNodeInput.lastModifiedDate,
            organizationName: args.finishedProductNodeInput.organizationName,

            images: args.finishedProductNodeInput.images,
            videos: args.finishedProductNodeInput.videos,
            documents: args.finishedProductNodeInput.documents,

            value: args.finishedProductNodeInput.value,
            valueUnit: args.finishedProductNodeInput.valueUnit,
            unitValue: args.finishedProductNodeInput.unitValue,
            unitValueUnit: args.finishedProductNodeInput.unitValueUnit,

            locationId: args.finishedProductNodeInput.locationId,
            name: args.finishedProductNodeInput.name,

            country: args.finishedProductNodeInput.country,
            city: args.finishedProductNodeInput.city,
            state: args.finishedProductNodeInput.state,
            latitude: args.finishedProductNodeInput.latitude,
            longitude: args.finishedProductNodeInput.longitude,
            elevation: args.finishedProductNodeInput.elevation,
            elevationUnit: args.finishedProductNodeInput.elevationUnit,

            address: args.finishedProductNodeInput.address

        });


        // Saving Finished Product Node  to the Database
        return finishedProductNode
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