// Importing Express
const express = require('express');
// Importing Express GraphQL
const { graphqlHTTP } = require('express-graphql');
// Importing Mongoose
const mongoose = require('mongoose');

const fetch = require('node-fetch');

require('dotenv').config();

// Importing GraphQL Schema
const graphQlSchema = require('./graphql/schemas/index');
// Importing GrahQL Resolvers
const graphQlResolvers = require('./graphql/resolvers/index');
// Importing Utility Functions
const { createHarvestLot } = require('./utils/createHarvestLot');
const { createWetMillNode } = require('./utils/createWetMillNode');
const { createWetMillLot } = require('./utils/createWetMillLot');
const { createExporterIntakeNode } = require('./utils/createExporterIntakeNode');
const { createExporterIntakeLot } = require('./utils/createExporterIntakeLot');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// ***************************** Creating a Harvest Node ***************************** //

const createHarvestNode = (nodeId) => {

    fetch(`${process.env.GET_NODE}${nodeId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.BEXT_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);

            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                    mutation {
                        createHarvestNode(harvestNodeInput: {

                                harvestNodeId: "${data.nodeId}"

                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                defaultLocationId: "${data.defaultLocationId}"
                                nodeName: "${data.nodeName}"
                                nodeType: "${data.nodeType}"
                                nodeDetailType: "${data.nodeDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                organizationName: "${data.organizationName}"

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images[1] ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents[1] ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos[1] ? data.videos[1].urls[0] : "")}"]

                                country: "${data.defaultLocation.country}"
                                city: "${data.defaultLocation.city}"
                                state: "${data.defaultLocation.state}"
                                latitude: "${data.defaultLocation.latitude}"
                                longitude: "${data.defaultLocation.longitude}"
                                elevation: "${data.defaultLocation.elevation}"
                                elevationUnit: "${data.defaultLocation.elevationUnit}"

                            }) {

                                harvestNodeId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

const mirianHarvestNodeId = '1dd07753-5a46-4151-a720-badaa9462153';
const claudiaYJuanHarvestNodeId = '702079e1-62c8-4087-bc82-544acf15d141';

// createHarvestNode();

// *********************************************************************************** //

// ***************************** Creating a Harvest Lot ****************************** //

const fetchAndStoreHarvestLots = async (harvestLotIds) => {
    for (let i = 0; i < harvestLotIds.length; i++) {
        // console.log(harvestLotIds.length);
        let functionCall = await createHarvestLot(harvestLotIds[i]);
        // console.log(harvestLotIds[i]);
        // continue;
    }
}

// fetchAndStoreHarvestLots();

// createHarvestLot();

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
const claudiaYJuanWetMillnodeId = '89b0ea0e-cc31-4da3-a22f-5bd1ca6eb3ae';

// createWetMillNode();

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //

// createWetMillLot("d6dcfac5-0610-44bb-a53b-3ba19a4b4a0b");

// Batch Fetch and Store the Wet Mill Lots

const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

// fetchAndStoreWetMillLots(MirianVasquezWetMillLots);

// *********************************************************************************** //

// *********************** Creating an Exporter Intake Node ************************** //

const marcalaIntakeNode = 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee';
// createExporterIntakeNode(marcalaIntakeNode);

// *********************************************************************************** //

// *********************** Creating an Exporter Intake Lot *************************** //

const fetchAndStoreExporterIntakeLots = async (exporterIntakeLotIds) => {
    for (let i = 0; i < exporterIntakeLotIds.length; i++) {

        let functionCall = await createExporterIntakeLot(exporterIntakeLotIds[i]);

    }
}

// fetchAndStoreExporterIntakeLots(lots);

// *********************************************************************************** //


const getDryMillNode = (nodeId) => {

    fetch(`${process.env.GET_NODE}${nodeId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.BEXT_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);

            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                    mutation {
                        createDryMillNode(dryMillNodeInput: {

                                dryMillNodeId: "${data.nodeId}"

                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                defaultLocationId: "${data.defaultLocationId}"
                                nodeName: "${data.nodeName}"
                                nodeType: "${data.nodeType}"
                                nodeDetailType: "${data.nodeDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                organizationName: "${data.organizationName}"

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images[1] ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents[1] ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos[1] ? data.videos[1].urls[0] : "")}"]

                                country: "${data.defaultLocation.country}"
                                city: "${data.defaultLocation.city}"
                                state: "${data.defaultLocation.state}"
                                latitude: "${data.defaultLocation.latitude}"
                                longitude: "${data.defaultLocation.longitude}"
                                elevation: "${data.defaultLocation.elevation}"
                                elevationUnit: "${data.defaultLocation.elevationUnit}"

                            }) {

                                dryMillNodeId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// getDryMillNode(VillaFloridaDryMillNodeId);


const getDryMillLot = (lotId) => {

    fetch(`${process.env.GET_LOT}${lotId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.BEXT_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);


            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                        mutation {
                            createDryMillLot(dryMillLotInput: {

                                dryMillLotId: "${data.lotId}"

                                dryMillNodeId: "${data.nodeId}"

                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                productId: "${data.productId}"
                                lotName: "${data.lotName}"
                                lotType: "${data.lotType}"
                                lotDetailType: "${data.lotDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                productName: "${data.productName}"
                                productToken: "${data.productToken}"
                                productSku: "${data.productSku}"
                                organizationName: "${data.organizationName}"
                                currentWeight: "${data.currentWeight}"
                                currentWeightUnit: "${data.currentWeightUnit}"
                                absorbedWeight: "${data.absorbedWeight}"
                                absorbedWeightUnit: "${data.absorbedWeightUnit}"
                                quality: "${data.quality}"

                                lotIsOpen: ${data.lotIsOpen}

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images.length > 1 ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents.length > 1 ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos.length > 1 ? data.videos[1].urls[0] : "")}"]
                                

                                value: "${(data.values ? Object.values(data.values)[0].value : "")}"
                                asset: "${(data.values ? Object.values(data.values)[0].asset : "")}"
                                timestamp: "${(data.values ? Object.values(data.values)[0].timeStamp : "")}"

                                processingDate: "${(data.customData['ProcessingDate.MeasureTime'] ? data.customData['ProcessingDate.MeasureTime'].value : "")}"

                            }) {

                                dryMillLotId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));



            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

// Testing one Dry Mill Lot - One Did not work. Performed manual input for the first lot.
// const mirianDryMillLots = ["dafe236e-cb33-477a-8fb1-5c5621e8462e", "03c316f5-3630-4361-aa4e-7834853de95e"];
// getDryMillLot("03c316f5-3630-4361-aa4e-7834853de95e");



////////////////////////////////////////////////////////////////////////////////////
// GraphQL API
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

// Establishing mongoDB connection with Mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Listening at port 3000

        // use port 3000 unless there exists a preconfigured port
        var port = process.env.PORT || 3000;

        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    });