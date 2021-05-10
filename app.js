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

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

// GraphQL API
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`

        type HarvestLot {
            harvestLotID: String!
        }

        type Farmer {
            farmerName: String!
            harvestNodeID: String!
            harvestLots: [HarvestLot]
        }

        input farmerInput {
            farmerName: String!
            harvestNodeID: String!
        }

        type RootQuery {
            farmers: [Farmer!]!
        }

        type RootMutation {
            createFarmer(farmerInput: farmerInput): Farmer
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

            const farmer = new Farmer({
                farmerName: args.farmerInput.farmerName,
                harvestNodeID: args.farmerInput.harvestNodeID
            });

            // Saving data to mongoDB
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