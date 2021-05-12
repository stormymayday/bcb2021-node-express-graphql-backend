// Importing Models
const Farmer = require('../../models/farmer');
const HarvestNode = require('../../models/harvestNode');
const HarvestLot = require('../../models/harvestLot');

// Fetch Functions
const fetchFarmer = farmerId => {

    return Farmer.findById(farmerId)
        .then(farmer => {

            return { ...farmer._doc };

        })
        .catch(err => {
            throw err;
        })

};

const fetchHarvestNode = harvestNodeId => {

    return HarvestNode.findById(harvestNodeId).populate('harvestLots')
        .then(harvestNode => {

            return {
                ...harvestNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

const fetchHarvestLot = harvestLotId => {

    return HarvesLot.findById(harvestLotId)
        .then(harvestLot => {

            return { ...harvestLot._doc };

        })
        .catch(err => {
            throw err;
        })

};

module.exports = {
    farmers: () => {
        return Farmer.find()
            .then(farmers => {
                return farmers.map(farmer => {
                    return {
                        ...farmer._doc,
                        // _id: farmer.id,
                        harvestNode: fetchHarvestNode.bind(this, farmer._doc.harvestNode)
                    };
                });
            })
            .catch(err => {
                throw err;
            });;
    },
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

    },
    createHarvestNode: (args) => {

        // Creating New Harvest Node
        const harvestNode = new HarvestNode({

            harvestNodeId: args.harvestNodeInput.harvestNodeId,
            farmer: '609c383759625bcf838b8e95'

        });

        // Saving Harvest Node to the Database
        return harvestNode
            .save()
            .then(result => {

                return { ...result._doc };

            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    createHarvestLot: (args) => {

        // Creating New Harvest 
        const harvestLot = new HarvestLot({

            harvestLotID: args.harvestLotInput.harvestLotId,
            lotWeight: args.harvestLotInput.lotWeight,
            ammountPaid: args.harvestLotInput.ammountPaid,

            harvestNode: '609c38d6e46632cfaeeb805b'

        });

        // Placeholder variable for the harvestLot (initially undefined)
        let createdHarvestLot;

        // Saving Harvest Lot to the Database
        return harvestLot
            .save()
            .then(result => {

                // 
                createdHarvestLot = { ...result._doc };

                // Finding Harvest Node by ID
                return HarvestNode.findById('609c38d6e46632cfaeeb805b')

            })
            .then(harvestNode => {

                // If Harvest Node with that ID is not found
                if (!harvestNode) {
                    throw new Error('Harvest Node was not found');
                }

                // Adding Harvest Lot into harvestLots array
                harvestNode.harvestLots.push(harvestLot);

                // Updating the appropriate Harvest Node in the database
                return harvestNode.save();

            })
            .then(result => {

                return createdHarvestLot;

            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    }
}