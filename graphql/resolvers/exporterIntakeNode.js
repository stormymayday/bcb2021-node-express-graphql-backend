const ExporterIntakeNode = require('../../models/exporterIntakeNode');

module.exports = {

    // Creating an Exporter Intake Node
    createExporterIntakeNode: (args) => {

        // Checking if an Exporter Intake Node with that exporterIntakeNodeId already exists in the database (to avoid duplicates)
        // return ExporterIntakeNode.findOne({ exporterIntakeNodeId: args.exporterIntakeNodeInput.exporterIntakeNodeId })

        //     .then(exporterIntakeNode => {

        //         // Omitting the check because all farmers will have the same Exporter Intake Node Id
        //         // if (exporterIntakeNode) {


        //         //     // throw new Error('Exporter Intake Node with that exporterIntakeNodeId already exists');

        //         // }
        //         // else {

        // Creating New Wet Mill Node
        const exporterIntakeNode = new ExporterIntakeNode({

            exporterIntakeNodeId: args.exporterIntakeNodeInput.exporterIntakeNodeId,

            // Mario Dionel 2022
            farmer: '634341ebd23e4deb333dd2af',

            totaAbsorbedWeight: args.exporterIntakeNodeInput.totaAbsorbedWeight,
            totalAbsorbedWeightUnit: args.exporterIntakeNodeInput.totalAbsorbedWeightUnit,

            organizationId: args.exporterIntakeNodeInput.organizationId,
            marketplaceId: args.exporterIntakeNodeInput.marketplaceId,
            defaultLocationId: args.exporterIntakeNodeInput.defaultLocationId,
            nodeName: args.exporterIntakeNodeInput.nodeName,
            nodeType: args.exporterIntakeNodeInput.nodeType,
            nodeDetailType: args.exporterIntakeNodeInput.nodeDetailType,
            createdDate: args.exporterIntakeNodeInput.createdDate,
            lastModifiedDate: args.exporterIntakeNodeInput.lastModifiedDate,
            organizationName: args.exporterIntakeNodeInput.organizationName,
            images: args.exporterIntakeNodeInput.images,
            videos: args.exporterIntakeNodeInput.videos,
            documents: args.exporterIntakeNodeInput.documents,

            country: args.exporterIntakeNodeInput.country,
            city: args.exporterIntakeNodeInput.city,
            state: args.exporterIntakeNodeInput.state,
            latitude: args.exporterIntakeNodeInput.latitude,
            longitude: args.exporterIntakeNodeInput.longitude,
            elevation: args.exporterIntakeNodeInput.elevation,
            elevationUnit: args.exporterIntakeNodeInput.elevationUnit

        });

        // Saving Exporter Intake Node to the Database
        return exporterIntakeNode
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