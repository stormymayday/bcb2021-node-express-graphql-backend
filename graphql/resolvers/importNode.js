const ImportNode = require('../../models/importNode');

module.exports = {

    // Creating an Import Node
    createImportNode: (args) => {

        // Checking if an Import Node with that importNodeId already exists in the database (to avoid duplicates)
        // return ImportNode.findOne({ importNodeId: args.importNodeInput.importNodeId })

        //     .then(importNode => {

        //         if (importNode) {

        //             throw new Error('Import Node with that importNodeId already exists');

        //         }
        //         else {

        // Creating New Import Node
        const importNode = new ImportNode({

            // Mario 2022
            farmer: '634341ebd23e4deb333dd2af',

            totaAbsorbedWeight: args.importNodeInput.totaAbsorbedWeight,
            totalAbsorbedWeightUnit: args.importNodeInput.totalAbsorbedWeightUnit,

            importNodeId: args.importNodeInput.importNodeId,

            organizationId: args.importNodeInput.organizationId,
            marketplaceId: args.importNodeInput.marketplaceId,
            defaultLocationId: args.importNodeInput.defaultLocationId,
            nodeName: args.importNodeInput.nodeName,
            nodeType: args.importNodeInput.nodeType,
            nodeDetailType: args.importNodeInput.nodeDetailType,
            createdDate: args.importNodeInput.createdDate,
            lastModifiedDate: args.importNodeInput.lastModifiedDate,
            organizationName: args.importNodeInput.organizationName,

            images: args.importNodeInput.images,
            videos: args.importNodeInput.videos,
            documents: args.importNodeInput.documents,

            value: args.importNodeInput.value,
            valueUnit: args.importNodeInput.valueUnit,
            unitValue: args.importNodeInput.unitValue,
            unitValueUnit: args.importNodeInput.unitValueUnit,

            locationId: args.importNodeInput.locationId,
            name: args.importNodeInput.name,

            country: args.importNodeInput.country,
            city: args.importNodeInput.city,
            state: args.importNodeInput.state,
            latitude: args.importNodeInput.latitude,
            longitude: args.importNodeInput.longitude,
            elevation: args.importNodeInput.elevation,
            elevationUnit: args.importNodeInput.elevationUnit

        });


        // Saving Import Node to the Database
        return importNode
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