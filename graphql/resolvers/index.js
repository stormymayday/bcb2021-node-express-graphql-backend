// Importing Individual Resolvers
const farmerResolver = require('./farmer');

const harvestNodeResolver = require('./harvestNode');
const harvestLotResolver = require('./harvestLot');

const wetMillNodeResolver = require('./wetMillNode');
const wetMillLotResolver = require('./wetMillLot');

const exporterIntakeNodeResolver = require('./exporterIntakeNode');
const exporterIntakeLotResolver = require('./exporterIntakeLot');

// Rest of the Individual Resolvers should go here...

// Mergin Individual Resolvers  into one resolver (rootResolver) for export
const rootResolver = {
    ...farmerResolver,
    ...harvestNodeResolver,
    ...harvestLotResolver,
    ...wetMillNodeResolver,
    ...wetMillLotResolver,
    ...exporterIntakeNodeResolver,
    ...exporterIntakeLotResolver
    // Add more resolvers here...
};

module.exports = rootResolver;

// Previous All in ine Resolver syntax
/*

// Importing Models
const Farmer = require('../../models/farmer');
const HarvestNode = require('../../models/harvestNode');
const HarvestLot = require('../../models/harvestLot');

// Fetch Functions
// Not used?
const fetchFarmer = farmerId => {

    return Farmer.findById(farmerId).populate('harvestNodes')
        .then(farmer => {

            return { ...farmer._doc };

        })
        .catch(err => {
            throw err;
        })

};

// Used in return Farmer
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

// not used?
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

                        // Harvest Node
                        harvestNode: fetchHarvestNode.bind(this, farmer._doc.harvestNode)

                        // Other Nodes down here...
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


        // Checking if a Harvest Node with that harvestNodeId already exists in the database (to avoid duplicates)
        return HarvestNode.findOne({ harvestNodeId: args.harvestNodeInput.harvestNodeId })
            .then(harvestNode => {

                if (harvestNode) {
                    throw new Error('Harvest Node with that harvestNodeId already exists');
                }
                else {


                    // Creating New Harvest Node
                    const harvestNode = new HarvestNode({

                        harvestNodeId: args.harvestNodeInput.harvestNodeId,
                        farmer: '609c383759625bcf838b8e95',

                        totaAbsorbedWeight: args.harvestNodeInput.totaAbsorbedWeight,
                        totalAbsorbedWeightUnit: args.harvestNodeInput.totalAbsorbedWeightUnit,

                        organizationId: args.harvestNodeInput.organizationId,
                        marketplaceId: args.harvestNodeInput.marketplaceId,
                        defaultLocationId: args.harvestNodeInput.defaultLocationId,
                        nodeName: args.harvestNodeInput.nodeName,
                        nodeType: args.harvestNodeInput.nodeType,
                        nodeDetailType: args.harvestNodeInput.nodeDetailType,
                        createdDate: args.harvestNodeInput.createdDate,
                        lastModifiedDate: args.harvestNodeInput.lastModifiedDate,
                        organizationName: args.harvestNodeInput.organizationName,
                        images: args.harvestNodeInput.images,
                        videos: args.harvestNodeInput.videos,
                        documents: args.harvestNodeInput.documents,

                        country: args.harvestNodeInput.country,
                        city: args.harvestNodeInput.city,
                        state: args.harvestNodeInput.state,
                        latitude: args.harvestNodeInput.latitude,
                        longitude: args.harvestNodeInput.longitude,
                        elevation: args.harvestNodeInput.elevation,
                        elevationUnit: args.harvestNodeInput.elevationUnit

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

                }

            });


    },
    createHarvestLot: (args) => {


        // Checking if a Harvest Node with that harvestNodeId already exists in the database (to avoid duplicates)
        return HarvestLot.findOne({ harvestLotId: args.harvestLotInput.harvestLotId })
            .then(harvestLot => {

                if (harvestLot) {
                    throw new Error('Harvest Lot with that harvestLotId already exists');
                }
                else {



                    // Creating New Harvest
                    const harvestLot = new HarvestLot({

                        harvestNode: '60a5dca2d64d33938abaafff',

                        harvestLotId: args.harvestLotInput.harvestLotId,

                        harvestNodeId: args.harvestLotInput.harvestLotId,


                        organizationId: args.harvestLotInput.organizationId,
                        marketplaceId: args.harvestLotInput.marketplaceId,
                        productId: args.harvestLotInput.productId,
                        lotName: args.harvestLotInput.lotName,
                        lotType: args.harvestLotInput.lotType,
                        lotDetailType: args.harvestLotInput.lotDetailType,
                        createdDate: args.harvestLotInput.createdDate,
                        lastModifiedDate: args.harvestLotInput.lastModifiedDate,
                        productName: args.harvestLotInput.productName,
                        productToken: args.harvestLotInput.productToken,
                        productSku: args.harvestLotInput.productSku,
                        organizationName: args.harvestLotInput.organizationName,
                        currentWeight: args.harvestLotInput.currentWeight,
                        currentWeightUnit: args.harvestLotInput.currentWeightUnit,
                        absorbedWeight: args.harvestLotInput.absorbedWeight,
                        absorbedWeightUnit: args.harvestLotInput.absorbedWeightUnit,
                        quality: args.harvestLotInput.quality,
                        lotIsOpen: args.harvestLotInput.lotIsOpen,

                        images: args.harvestLotInput.images,

                        ammountPaid: args.harvestLotInput.ammountPaid,
                        currency: args.harvestLotInput.currency,

                        coffeeVarietal: args.harvestLotInput.coffeeVarietal,

                        harvestDate: args.harvestLotInput.harvestDate

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
                            return HarvestNode.findById('60a5dca2d64d33938abaafff')

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

            });


    }
}
*/