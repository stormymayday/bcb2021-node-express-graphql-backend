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
const { createHarvestNode } = require('./utils/createHarvestNode');
const { createHarvestLot } = require('./utils/createHarvestLot');
const { createWetMillNode } = require('./utils/createWetMillNode');
const { createWetMillLot } = require('./utils/createWetMillLot');
const { createExporterIntakeNode } = require('./utils/createExporterIntakeNode');
const { createExporterIntakeLot } = require('./utils/createExporterIntakeLot');
const { createDryMillNode } = require('./utils/createDryMillNode');
const { createDryMillLot } = require('./utils/createDryMillLot');
const { createExportNode } = require('./utils/createExportNode');
const { createExportLot } = require('./utils/createExportLot');
const { createImportNode } = require('./utils/createImportNode');
const { createImportLot } = require('./utils/createImportLot');
const { createRoasterIntakeNode } = require('./utils/createRoasterIntakeNode');
const { createRoasterIntakeLot } = require('./utils/createRoasterIntakeLot');
const { createRoastingNode } = require('./utils/createRoastingNode');
const { createRoastingLot } = require('./utils/createRoastingLot');

const { createfinishedProductNode } = require('./utils/createfinishedProductNode');
const { createFinishedProductLot } = require('./utils/createFinishedProductLot');

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

const luisNodeId = 'c26b851e-4636-4525-91f0-e61888540f59';

// createHarvestNode(luisNodeId);

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

// Luis 2022
const harvestLots = ["803120db-ed3f-4a38-8566-4cd95fb8e095"];

// fetchAndStoreHarvestLots(harvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const luisWetMillnodeId = '16710ddc-6cc3-4b82-8759-8edc91444011';

// createWetMillNode(luisWetMillnodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = ["d37c9bbb-32a2-4cd5-8473-4888f335d533"];

// fetchAndStoreWetMillLots(wetMillLots);

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
const exporterIntakeLots = ["9af15cb5-e444-4015-a62e-81a3312cdf71", "bcbb0738-5636-4c1a-a7bd-5a45396111c8", "e3fd9b5e-e9d5-43a9-ba5a-adbb1ccc1190", "ef50b932-9585-4e31-ac6b-fb919269b31f", "b3f1ce12-6f41-4da8-9671-d7f2b6bb3595", "16157aaf-3c21-4e2e-9240-04a929de3cb8", "0ebd9476-83d4-4da4-9c10-6ed76f32785d", "ce60c094-5647-4a46-a2dc-7d473abcaa3a"];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["ed5c61dc-35f3-4ba4-bfba-a76103fb7415", "c68afd07-d7eb-4eb2-9020-e5bda7775b1d"];


const fetchAndStoreDryMillLots = async (dryMillLotIds) => {
    for (let i = 0; i < dryMillLotIds.length; i++) {

        let functionCall = await createDryMillLot(dryMillLotIds[i]);

    }
}

// fetchAndStoreDryMillLots(dryMillLots);

// *********************************************************************************** //

// **************************** Creating an Export Node ****************************** //

const ExportNodeId = 'b8a4b60f-552b-406e-84f9-3bafd0b3f904';
// createExportNode(ExportNodeId);

// *********************************************************************************** //

// **************************** Creating an Export Lots ****************************** //

const exportLots = ["b14559ce-dfb9-48b8-802b-ee6e3ee6fb64"];

const fetchAndStoreExportLots = async (exportLotIds) => {
    for (let i = 0; i < exportLotIds.length; i++) {

        let functionCall = await createExportLot(exportLotIds[i]);

    }
}

// fetchAndStoreExportLots(exportLots);

// *********************************************************************************** //

// **************************** Creating an Import Node ****************************** //

const ImportNodeId = 'ee761058-6de6-47b3-94ce-33059975764c';
// createImportNode(ImportNodeId);

// *********************************************************************************** //

// **************************** Creating an Import Lots ****************************** //

const importLots = ["b8448e5c-c67b-43cc-9c8a-8759bcb963b1"];

const fetchAndStoreImportLots = async (importLotIds) => {
    for (let i = 0; i < importLotIds.length; i++) {

        let functionCall = await createImportLot(importLotIds[i]);

    }
}

// fetchAndStoreImportLots(importLots);

// *********************************************************************************** //

// *********************** Creating an Roaster Intake Node *************************** //

const qcccRoasterIntakeNode = 'bbb8b444-ad7b-4caf-8d82-d30eee42d357';
const oldSoulRoasterIntakeNode = 'c9694f10-e161-476c-96d2-47282eb02bda';
// createRoasterIntakeNode(oldSoulRoasterIntakeNode);

// *********************************************************************************** //

// ************************* Creating Roaster Intake Lots **************************** //

const qcccRoasterIntakeLots = ["8867ca16-4ad9-49f2-bca4-0b581190d43e"];
const oldSoulRoasterIntakeLots = ["7e57cb06-2e95-4b65-bb2a-8ae55bbc011d"];

const fetchAndStoreRoasterIntakeLots = async (roasterIntakeLotsIds) => {
    for (let i = 0; i < roasterIntakeLotsIds.length; i++) {

        let functionCall = await createRoasterIntakeLot(roasterIntakeLotsIds[i]);

    }
}

// fetchAndStoreRoasterIntakeLots(oldSoulRoasterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Roasting Node ***************************** //

const qcccRoastingNode = '302f1a90-0600-4fcc-831c-b417bd4dcb8d';
const oldSoulRoastingNode = '43774e42-e708-4e08-899e-5996c4dda30b';
// createRoastingNode(oldSoulRoastingNode);

// *********************************************************************************** //

// **************************** Creating Roasting Lots ******************************* //

const qcccRoastingLots = ["9c25f3d0-59b6-4d0f-a5b1-a73ce7642dfb"];
const oldSoulRoastingLots = ["5ba440b9-0f3a-4799-b440-8a77e1cebe1f"];

const fetchAndStoreRoastingLots = async (roastingLotsIds) => {

    for (let i = 0; i < roastingLotsIds.length; i++) {

        let functionCall = await createRoastingLot(roastingLotsIds[i]);

    }
}

// fetchAndStoreRoastingLots(qcccRoastingLots);

// *********************************************************************************** //

// **************************** Creating a Finished Product Node ***************************** //

const qcccFinishedProductNode = 'd4abf00e-9b80-4c0e-a359-ec5898183857';
const oldSoulFinishedProductNode = '9a1b101c-532e-4aaf-99bd-82c27691d7c6';

// createfinishedProductNode(qcccFinishedProductNode);

// *********************************************************************************** //

// **************************** Creating Finished Product Lot ******************************* //

const qcccFinishedProductLots = ["b851576a-5eb7-40c6-8e10-a53c68667db1"];
const oldFinishedProductLots = ["fb59d600-0884-470e-9e31-4c94edc55cfd"];

const fetchAndStoreFinishedProductLots = async (finishedProductLotIds) => {

    for (let i = 0; i < finishedProductLotIds.length; i++) {

        let functionCall = await createFinishedProductLot(finishedProductLotIds[i]);

    }
}

// fetchAndStoreFinishedProductLots(qcccFinishedProductLots);

// *********************************************************************************** //

/////////////////////////////////////////////////////////////////////////////////////////

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