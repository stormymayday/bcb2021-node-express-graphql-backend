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

// const mirianHarvestNodeId = '1dd07753-5a46-4151-a720-badaa9462153';
// const ClaudiaYJuanHarvestNodeId = '702079e1-62c8-4087-bc82-544acf15d141';
// createHarvestNode(ClaudiaYJuanHarvestNodeId);

const ClaudiaYJuanHarvestLots = ["667362c6-0937-4698-9e91-276b943e5fc1", "2a17ebf5-05f0-424f-bd6b-af9b2d1c836d", "b8ac5ac8-9189-42cb-8822-c2fd3d452a36", "cb2b0aeb-2e14-45b2-99ca-43300c1191bf", "f6ad9c9f-c4a6-4ca8-9303-8a9399f83fcc", "dc03e36b-397e-4baa-8007-796670ddff10", "55b8a052-1590-4270-be4c-9f7eb444558e", "c62fe7df-75c3-49ed-95f7-5fa8257ae87a", "89e13fe6-3832-4b80-9475-5f976668e390", "07f38f05-3fd5-4c52-a6df-d589c486b3df", "e6ed7916-c605-42cd-a53c-d445cca8ea23", "1ee9b2ba-fde3-4cd8-b071-ec96194535ce", "e4595484-621e-4dac-955c-cdfd55a2da01", "496f9994-1a85-4470-a990-717c0f41e3ae", "e923ee6b-50fc-4c6f-bf36-5fe2fc03b282", "0c724680-10f1-44cd-8cc4-c0b56132d015", "1da3b6d4-9cd2-467c-899f-772e195eda6f", "2ddb47c7-f6bd-458c-b5e5-d49586912ed7", "b4ad7157-0560-48d9-ae59-5ed73fc3b701", "18aa87e1-50ed-4c32-b64b-c8d57c2c6819", "86688145-d5d6-44a5-8288-88ea33d60aad", "8a34f120-294e-41d5-8792-ab3f7d2f1bd2", "04fbc2e5-492b-47db-bf78-2226287df4c5", "784f4f36-3223-4201-924e-0ffc32842840", "6207e2e3-ba7f-4d1a-86a3-42bdab91060a", "3ef44fb6-dc07-4025-a1af-78312777dd05", "5d15956e-e787-453c-9adf-61edee79ee75", "e2259169-6f85-40c8-a9b6-48381d179e0c", "eb4bb57e-1668-4461-ad46-af767db70d76", "c3902b0a-90ea-4cf1-b13c-206d6eea5090", "a1c998b6-ef97-40a4-a039-04c32a625b52", "9317c2ff-f604-4323-92c6-d0b0b9bae57a", "0caa3942-de47-4922-9b11-9df1d1cb8d46", "3d3df6b9-9a3e-4220-80d8-8c534a1c042a", "7b7dfa38-c8f5-426d-b029-ccfe023a44af", "08219d5e-b4d7-41bc-802c-dc6675619a1d", "1be5de83-d492-44e9-8f97-e0ced320e859", "967731e3-3d14-4c3d-a095-020e820cef0d", "d6386279-13b3-40fe-aa0a-854cfa1791de", "155a3099-5d42-4039-b028-629899c26319", "ba0528b4-0539-469b-9da9-5c54426ad26a", "b91765d6-7c4b-442f-b627-a561f9c6f0f5", "9eb85492-9076-4945-9526-5cd7687838d3", "edb07e9a-12d7-4ae9-914e-1b41a02432de", "a086ec37-1652-4d58-987e-07ff645f63b4", "1bb090d3-c7ae-4e8d-9f15-52dc43b8d0e8", "6130723c-63b6-43e8-afeb-41e3eec9e3b7", "e15f40a1-1459-41be-89ce-b2d5ddaf2289", "45f41808-f897-4a55-92e3-e7eeae2d5eef", "11801240-2c0b-4197-a903-5ad09f961219", "f0edf4dd-eac2-4f60-8e2b-bfaf70dd7e54", "f83be741-e587-45e4-8db2-363f39dd7082", "cf363d82-1525-42b3-9a12-aa2baf3a83ee", "940ccb64-f688-4bae-ab73-7f1446cf1f75", "bb2dc393-75f2-4d7d-9a26-8a21205cc3a8", "a6001887-59b3-4ed1-b7ad-e9adbf146f3c", "39f45766-26ba-4cc1-b272-c6c962fa05c3", "8055f078-a44c-4c1e-82a0-0eebee924216", "bbee5522-3de6-48d9-8cd9-e5e380eee7ef", "ab10e713-87c7-4445-9fb1-6db9473931d6", "4f9fadc1-69c1-4208-bff9-cd23c05f049e", "2274e4be-0e63-4074-b114-5a36d20a61e6", "b5722a59-9c20-494a-81a1-66e9b14a0072", "41f2a111-3378-4499-ae7a-8ed1532b86fb", "aecef73d-7cb9-45b8-a879-5fd6f9067b8c", "bd489413-53cf-4610-bd7b-84cba5cc4fe7", "a7f24803-e14d-4ccc-97d7-7e36d3f1920b", "fc7e7ee5-cdf1-4e7b-a539-2ff23080e36c", "05a53125-e75c-4471-bbd6-51e89d7dd0a0", "a9564c0c-01b4-422d-8eeb-7373f173b44c", "a972494c-a338-4a79-b098-0ea05f2f636c", "e49a9dbb-f01a-477a-8e09-ddade3eb8511", "400dd108-aea4-4fd5-8490-b92d21eaa52a", "0b5dd230-394b-4a13-9e0a-53f01ad14efc", "19097575-3f74-4055-a2aa-fc0bbd3220e1", "e1c77b43-941d-4059-9930-916877ba9958", "4bdf98f9-82e4-44e5-967c-747873842c04", "ed6edf9d-6386-4722-8aae-6686d23efe86", "62576b00-92ab-41c0-94aa-1ca1f3961687", "100a8b39-3cb9-4ceb-b0f7-81ae722b867a", "e05d3f7d-2046-4d64-9060-ad81d1a3cb34", "ac154ed3-fa5a-4fa5-abbc-9883b4d9163f", "c58220b1-ef17-4506-beb8-09ad5522f08d", "03522d55-7be4-4af7-ad9d-d1e5d465060c", "dc16a566-a30b-46b4-bd23-407faec4a381", "aa3e0a4c-5f9d-4729-b673-069ab4d82c2d", "9b38d480-c54c-4bc7-ae64-a57a10e1d5d5", "77f23537-a676-4674-9830-c6ca9ac4e7e3", "aee0370c-214e-422d-8d3f-32fdc006b652", "368e6e57-8432-44dd-8e1d-5e9eeb25c046", "48ab0129-8bea-477c-bbf8-3a6cff4a8b15", "7ab506ff-57c1-48a7-8e0e-bd8a73ce3512", "a3d9df53-e520-4f0d-b2a8-e2e13f744a32", "5d48512e-6b6d-41bc-90e3-a3396937f97a", "b874f685-0cc8-4d80-b9f3-1dbaceddd5c9", "75548348-afe9-4cd5-b05b-3e261d0a36df", "588fc370-80eb-44a4-97df-a5cebca0a039", "932c3acf-943a-4a5e-b972-84071dfee949", "3e767b37-6374-4263-aa78-d58908302400", "856899eb-d96f-411c-b82d-4761af23c3f4", "95d070b6-57b8-4b79-a6eb-92b7da4a8fd6", "83f694a4-5ed8-43bb-86de-1636c5d13b99", "e3b4fe4a-5aba-4c08-b469-4e3bbe2b4479", "266b83d3-0a8d-4e8e-b380-a58487988f13"];

// createHarvestLot("266b83d3-0a8d-4e8e-b380-a58487988f13");


const fetchAndStoreHarvestLots = async (harvestLotIds) => {
    for (let i = 0; i < harvestLotIds.length; i++) {
        // console.log(harvestLotIds.length);
        let functionCall = await createHarvestLot(harvestLotIds[i]);
        // console.log(harvestLotIds[i]);
        // continue;
    }
}

// fetchAndStoreHarvestLots(MirianVasquezHarvestLots);


const getWetMillNode = (nodeId) => {

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
                        createWetMillNode(wetMillNodeInput: {

                                wetMillNodeId: "${data.nodeId}"

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

                                wetMillNodeId

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

// const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
// getWetMillNode(mirianWetMillnodeId);

const getWetMillLot = (wetMillLotId) => {

    fetch(`${process.env.GET_LOT}${wetMillLotId}`, {
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
                            createWetMillLot(wetMillLotInput: {

                                wetMillLotId: "${data.lotId}"

                                wetMillNodeId: "${data.nodeId}"

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

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images[1] ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents[1] ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos[1] ? data.videos[1].urls[0] : "")}"]
                                

                                value: "${(data.values ? Object.values(data.values)[0].value : "")}"
                                asset: "${(data.values ? Object.values(data.values)[0].asset : "")}"
                                timestamp: "${(data.values ? Object.values(data.values)[0].timeStamp : "")}"

                                processingDate: "${(data.customData['ProcessingDate.MeasureTime'] ? data.customData['ProcessingDate.MeasureTime'].value : "")}"

                            }) {

                                wetMillLotId

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

// Testing one Wet Mill Lot
const mirianWetMillLot = "c13610e8-18e4-49bb-82e5-791b8d8b8b21";
// getWetMillLot(mirianWetMillLot);

// Batch Fetch and Store the Wet Mill Lots

const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await getWetMillLot(wetMillIds[i]);

    }
}

const MirianVasquezWetMillLots = ["c13610e8-18e4-49bb-82e5-791b8d8b8b21", "8be0775b-8377-4133-9bec-1b0ea4ec83d0", "3893b8b7-9181-44a6-be47-c2979c0ec131", "84507466-9415-4f94-8e06-5a99898c08cf", "f404322f-00ba-42e8-9558-780527672df0", "b46fbefe-8186-486c-98c8-45063d0873a4", "41aa6559-b7b3-4d2e-879c-2203ac564275", "3c210d7e-e9e8-4e65-9418-278b2d00863a", "79fa6bab-00da-48b2-a008-17bcee1301df", "aaf221c2-6354-4774-8c07-bb9c48f57850", "63ee52a3-3f47-4fee-a196-215062f1479a", "5c4ad4e5-6f63-41a3-9b82-de3f675302ee"];

// fetchAndStoreWetMillLots(MirianVasquezWetMillLots);

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