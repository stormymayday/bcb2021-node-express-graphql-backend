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

const wetMillLots = ["39ed522b-c6e7-4a55-96e4-cdf950728a9b", "bb489cf1-1990-47e1-b7b8-e18dad4c5588", "2f0aebbf-9cef-4d25-ac08-423259921f97", "09a688f8-18a2-4055-8609-5bbf03f70295", "411013de-182e-4343-8bb6-c4c389868b86", "698a5a05-e9d9-45c1-acbd-35ffabd4a091", "4547a0c0-0bec-4dff-8ac1-66d1f110ebea", "12abf096-1182-47a6-9fe1-7fa5e5ab6bdb", "36d544e8-251b-44b8-946c-dbbfbe963dc8", "793b5552-03ba-44d4-91d2-c0801de689cc", "b1f2c43d-7a10-4dc2-8d3e-5151f6f0af70", "24995ef1-64eb-4e6d-96ca-5d0391f5f2bc", "fca23d55-c571-454e-964c-fbe3c7992941", "7a29756d-48c6-4586-be82-eef1a97e65bd", "0264a7f1-fae7-4c01-aeef-c863cf6fd610", "476fc798-b1fe-4f34-a8af-3ad7ce0eecf7", "8dc1ef52-2e4b-4e04-b8e4-7fb8bed63174", "3671514d-0de8-4f00-8db6-e1e070036e80", "8978b880-2e04-4fef-a252-0aca0c19e172", "5e957345-e657-442a-804d-f342de4b85d7", "6c4af25b-c0e6-4ac0-9597-89809fdeb122", "db3457a8-4262-4170-b7d0-ff0f04325805", "0bedef98-c38a-430b-b848-843504d90029", "36be097a-8f71-4136-90c1-8fdf80dea971", "04601f12-8060-45ec-9b31-5c3dc1c206de", "86bfef75-9ffe-4984-a9f8-be370fdbc309", "d6dcfac5-0610-44bb-a53b-3ba19a4b4a0b"];

// createWetMillLot("39ed522b-c6e7-4a55-96e4-cdf950728a9b");

// Batch Fetch and Store the Wet Mill Lots

const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

// fetchAndStoreWetMillLots(MirianVasquezWetMillLots);

// *********************************************************************************** //

const getExporterIntakeNode = (nodeId) => {

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
                        createExporterIntakeNode(exporterIntakeNodeInput: {

                                exporterIntakeNodeId: "${data.nodeId}"

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

                                exporterIntakeNodeId

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

// Did not work. Performed manual input
// const marcalaIntakeNode = 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee';
// getExporterIntakeNode(marcalaIntakeNode);

const getExporterIntakeLot = (exporterIntakeLotId) => {

    fetch(`${process.env.GET_LOT}${exporterIntakeLotId}`, {
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
                            createExporterIntakeLot(exporterIntakeLotInput: {

                                exporterIntakeLotId: "${data.lotId}"

                                exporterIntakeNodeId: "${data.nodeId}"

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
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents[1] ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos[1] ? data.videos[1].urls[0] : "")}"]
                                

                                value: "${(data.values ? Object.values(data.values)[0].value : "")}"
                                asset: "${(data.values ? Object.values(data.values)[0].asset : "")}"
                                timestamp: "${(data.values ? Object.values(data.values)[0].timeStamp : "")}"

                                processingDate: "${(data.customData['ProcessingDate.MeasureTime'] ? data.customData['ProcessingDate.MeasureTime'].value : "")}"

                            }) {

                                exporterIntakeLotId

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


// Testing one Exporter Intake Lot
const mirianExprterIntakeLot = "fa5900c5-8745-4c65-9424-9cd4dacd1b9c";
// getExporterIntakeLot(mirianExprterIntakeLot);

// Batch Fetch and Store the Exporter Intake Lots

const fetchAndStoreExporterIntakeLots = async (exporterIntakeLotIds) => {
    for (let i = 0; i < exporterIntakeLotIds.length; i++) {

        let functionCall = await getExporterIntakeLot(exporterIntakeLotIds[i]);

    }
}

const MirianVasquezExporterIntakeLots = ["b1e3936e-ac65-4197-9781-23567a1aa5b5", "fa5900c5-8745-4c65-9424-9cd4dacd1b9c", "42ec3333-ecbb-48ae-b90d-5bdcbf254f70", "a6848507-664d-4c00-8f28-c25f3ee3a3b9", "cef36cd9-b538-4fd4-99cd-d665fff0ab29", "d786b175-1827-482e-b94d-86196c3f057a"];

// fetchAndStoreExporterIntakeLots(MirianVasquezExporterIntakeLots);


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