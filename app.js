// Importing Express
const express = require('express');
// Importing Express GraphQL
const { graphqlHTTP } = require('express-graphql');
// Importing buildSchema property
const { buildSchema } = require('graphql');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`

        type RootQuery {
            farmers: [String!]!
        }

        type RootMutation {
            createFarmer(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }

    `),
    rootValue: {
        farmers: () => {
            return ['Claudia & Juan', 'Mirian Vasquez'];
        },
        createFarmer: (args) => {
            const farmerName = args.name;
            return farmerName;
        }
    },
    graphiql: true
}));

// Listening on port 3000
app.listen(3000);