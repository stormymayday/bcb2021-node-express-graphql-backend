// Importing Mongoose Models
const Farmer = require('../../models/farmer');

// Importing Merge (Fetch) Functions
const { fetchHarvestNode, fetchWetMillNode } = require('./merge');


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
                        wetMillNode: fetchWetMillNode.bind(this, farmer._doc.wetMillNode)

                        // Other Nodes down here...
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
                        farmerName: args.farmerInput.farmerName
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