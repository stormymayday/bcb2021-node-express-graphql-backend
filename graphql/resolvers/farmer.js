// Importing Mongoose Models
const Farmer = require('../../models/farmer');

// Importing Merge (Fetch) Functions
const {

    fetchHarvestNode,
    fetchWetMillNode,
    fetchExporterIntakeNode,
    fetchDryMillNode,
    fetchExportNode,
    fetchImportNode,
    fetchRoasterIntakeNode,
    fetchRoastingNode,
    fetchFinishedProductNode

} = require('./merge');


module.exports = {
    // Fetching All Farmers
    farmers: () => {
        return Farmer.find()
            .then(farmers => {
                return farmers.map(farmer => {
                    return {
                        ...farmer._doc,
                        // _id: farmer.id,

                        // Harvest Node
                        harvestNode: fetchHarvestNode.bind(this, farmer._doc.harvestNode),

                        // Wet Mill Node
                        wetMillNode: fetchWetMillNode.bind(this, farmer._doc.wetMillNode),

                        // Exporter Intake Node
                        exporterIntakeNode: fetchExporterIntakeNode.bind(this, farmer._doc.exporterIntakeNode),

                        // Dry Mill Node
                        dryMillNode: fetchDryMillNode.bind(this, farmer._doc.dryMillNode),

                        // Export Node
                        exportNode: fetchExportNode.bind(this, farmer._doc.exportNode),

                        // Import Node
                        importNode: fetchImportNode.bind(this, farmer._doc.importNode),

                        // Roaster Intake Node
                        roasterIntakeNode: fetchRoasterIntakeNode.bind(this, farmer._doc.roasterIntakeNode),

                        // Roasting Node
                        roastingNode: fetchRoastingNode.bind(this, farmer._doc.roastingNode),

                        // Finished Product Node
                        finishedProductNode: fetchFinishedProductNode.bind(this, farmer._doc.finishedProductNode)

                        // Other Nodes ...

                    };
                });
            })
            .catch(err => {
                throw err;
            });;
    },
    // Creating a Farmer
    createFarmer: (args) => {

        // Checking if a Farmer with that name already exists in the database (to avoid duplicates)
        return Farmer.findOne({ farmerName: args.farmerInput.farmerName })
            .then(farmer => {

                if (farmer) {
                    throw new Error('Farmer with that name already exists');
                }
                else {

                    // Creating New Farmer
                    const farmer = new Farmer({
                        farmerName: args.farmerInput.farmerName,
                        producerName: args.farmerInput.producerName,
                        harvestYear: args.farmerInput.harvestYear
                    });

                    // Saving Farmer to the Database
                    return farmer
                        .save()
                        .then(result => {
                            console.log(result);
                            return { ...result._doc };
                        }).catch(err => {
                            console.log(err);
                            throw err;
                        });
                }

            });

    }
}