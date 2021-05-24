// Importing Express
const express = require('express');
// Importing Express GraphQL
const { graphqlHTTP } = require('express-graphql');
// Importing Mongoose
const mongoose = require('mongoose');

const fetch = require('node-fetch');

// Importing GraphQL Schema
const graphQlSchema = require('./graphql/schemas/index');
// Importing GrahQL Resolvers
const graphQlResolvers = require('./graphql/resolvers/index');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

const getNode = (nodeId) => {

    fetch(`https://bext360api.azure-api.net/retaildev/v1/getnode/${nodeId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data)

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

// const nodeId = '702079e1-62c8-4087-bc82-544acf15d141';
// getNode(nodeId);

const getLot = (lotId) => {

    fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${lotId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            // console.log(data);
            console.log(data.images[0].urls[0], Object.values(data.values)[0].value, Object.values(data.values)[0].asset);

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

const lotId = 'e3b4fe4a-5aba-4c08-b469-4e3bbe2b4479';
// getLot(lotId);


// GraphQL API
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));


// Establishing mongoDB connection with Mongoose
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bcb2021cluster.seoo1.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Listening at port 3000
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });