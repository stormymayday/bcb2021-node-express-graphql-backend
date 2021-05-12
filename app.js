// Importing Express
const express = require('express');
// Importing Express GraphQL
const { graphqlHTTP } = require('express-graphql');
// Importing buildSchema property
const { buildSchema } = require('graphql');
// Importing Mongoose
const mongoose = require('mongoose');

// Importing Models
const Farmer = require('./models/farmer');
const HarvestNode = require('./models/harvestNode');
const HarvestLot = require('./models/harvestLot');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

// GraphQL API
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`

        type HarvestLot {
            harvestLotID: String!
            lotWeight: Float
            ammountPaid: Float
            harvestNode: HarvestNode
        }

        input HarvestLotInput {
            harvestLotId: String!
            lotWeight: Float
            ammountPaid: Float
        }

        type HarvestNode {
            harvestNodeId: String!
            harvestLots: [HarvestLot]
        }

        input HarvestNodeInput {
            harvestNodeId: String!
            harvestLots: [HarvestLotInput]
        }

        type Farmer {
            farmerName: String!
            harvestNode: HarvestNode
        }

        input FarmerInput {
            farmerName: String!
            harvestNode: HarvestNodeInput
        }

        type RootQuery {
            farmers: [Farmer!]!
        }

        type RootMutation {
            createFarmer(farmerInput: FarmerInput): Farmer
            createHarvestNode(harvestNodeInput: HarvestNodeInput): HarvestNode
            createHarvestLot(harvestLotInput: HarvestLotInput): HarvestLot
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }

    `),
    rootValue: {
        farmers: () => {
            return Farmer.find()
                .then(farmers => {
                    return farmers.map(farmer => {
                        return { ...farmer._doc };
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
    },
    graphiql: true
}));


// Establishing mongoDB connection with Mongoose
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bcb2021cluster.seoo1.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        // Listening at port 3000
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });