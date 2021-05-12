// Importing Express
const express = require('express');
// Importing Express GraphQL
const { graphqlHTTP } = require('express-graphql');
// Importing Mongoose
const mongoose = require('mongoose');

// Importing GraphQL Schema
const graphQlSchema = require('./graphql/schemas/index');
// Importing GrahQL Resolvers
const graphQlResolvers = require('./graphql/resolvers/index');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

// GraphQL API
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
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