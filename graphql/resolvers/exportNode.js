const ExportNode = require('../../models/exportNode');

module.exports = {

    // Creating an Export Node
    createExportNode: (args) => {

        // Checking if an Export Node with that exportNodeId already exists in the database (to avoid duplicates)
        // return ExportNode.findOne({ exportNodeId: args.exportNodeInput.exportNodeId })

        //     .then(exportNode => {

        //         if (exportNode) {

        //             throw new Error('Export Node with that exportNodeId already exists');

        //         }
        //         else {

        // Creating New Export Node
        const exportNode = new ExportNode({

            // Claudia & Juan
            farmer: '60eb7fe31bc2c19311e8419f',

            totaAbsorbedWeight: args.exportNodeInput.totaAbsorbedWeight,
            totalAbsorbedWeightUnit: args.exportNodeInput.totalAbsorbedWeightUnit,

            exportNodeId: args.exportNodeInput.exportNodeId,

            organizationId: args.exportNodeInput.organizationId,
            marketplaceId: args.exportNodeInput.marketplaceId,
            defaultLocationId: args.exportNodeInput.defaultLocationId,
            nodeName: args.exportNodeInput.nodeName,
            nodeType: args.exportNodeInput.nodeType,
            nodeDetailType: args.exportNodeInput.nodeDetailType,
            createdDate: args.exportNodeInput.createdDate,
            lastModifiedDate: args.exportNodeInput.lastModifiedDate,
            organizationName: args.exportNodeInput.organizationName,

            images: args.exportNodeInput.images,
            videos: args.exportNodeInput.videos,
            documents: args.exportNodeInput.documents,

            value: args.exportNodeInput.value,
            valueUnit: args.exportNodeInput.valueUnit,
            unitValue: args.exportNodeInput.unitValue,
            unitValueUnit: args.exportNodeInput.unitValueUnit,

            locationId: args.exportNodeInput.locationId,
            name: args.exportNodeInput.name,

            country: args.exportNodeInput.country,
            city: args.exportNodeInput.city,
            state: args.exportNodeInput.state,
            latitude: args.exportNodeInput.latitude,
            longitude: args.exportNodeInput.longitude,
            elevation: args.exportNodeInput.elevation,
            elevationUnit: args.exportNodeInput.elevationUnit

        });


        // Saving Export Node to the Database
        return exportNode
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