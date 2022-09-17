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
const harvestLots = [];

// fetchAndStoreHarvestLots(harvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const luisWetMillnodeId = '';

// createWetMillNode(luisWetMillnodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = [];

// fetchAndStoreWetMillLots(wetMillLots);

// *********************************************************************************** //

// *********************** Creating an Exporter Intake Node ************************** //

const marcalaIntakeNode = '';
// createExporterIntakeNode(marcalaIntakeNode);

// *********************************************************************************** //

// *********************** Creating an Exporter Intake Lot *************************** //

const fetchAndStoreExporterIntakeLots = async (exporterIntakeLotIds) => {
    for (let i = 0; i < exporterIntakeLotIds.length; i++) {

        let functionCall = await createExporterIntakeLot(exporterIntakeLotIds[i]);

    }
}
const exporterIntakeLots = [];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const fetchAndStoreDryMillLots = async (dryMillLotIds) => {
    for (let i = 0; i < dryMillLotIds.length; i++) {

        let functionCall = await createDryMillLot(dryMillLotIds[i]);

    }
}

const dryMillLots = [];

// fetchAndStoreDryMillLots(dryMillLots);

// *********************************************************************************** //

// **************************** Creating an Export Node ****************************** //

const ExportNodeId = '';
// createExportNode(ExportNodeId);

// *********************************************************************************** //

// **************************** Creating an Export Lots ****************************** //

const fetchAndStoreExportLots = async (exportLotIds) => {
    for (let i = 0; i < exportLotIds.length; i++) {

        let functionCall = await createExportLot(exportLotIds[i]);

    }
}

const exportLots = [];

// fetchAndStoreExportLots(exportLots);

// *********************************************************************************** //

// **************************** Creating an Import Node ****************************** //

const ImportNodeId = '';
// createImportNode(ImportNodeId);

// *********************************************************************************** //

// **************************** Creating an Import Lots ****************************** //

const fetchAndStoreImportLots = async (importLotIds) => {
    for (let i = 0; i < importLotIds.length; i++) {

        let functionCall = await createImportLot(importLotIds[i]);

    }
}
const importLots = [];

// fetchAndStoreImportLots(importLots);

// *********************************************************************************** //

// *********************** Creating an Roaster Intake Node *************************** //

// const oldSoulRoasterIntakeNode = 'c9694f10-e161-476c-96d2-47282eb02bda';
// createRoasterIntakeNode(oldSoulRoasterIntakeNode);

// *********************************************************************************** //

// ************************* Creating Roaster Intake Lots **************************** //

const fetchAndStoreRoasterIntakeLots = async (roasterIntakeLotsIds) => {
    for (let i = 0; i < roasterIntakeLotsIds.length; i++) {

        let functionCall = await createRoasterIntakeLot(roasterIntakeLotsIds[i]);

    }
}

const oldSoulRoasterIntakeLots = [];

// fetchAndStoreRoasterIntakeLots(oldSoulRoasterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Roasting Node ***************************** //

const oldSoulRoastingNode = '748c53d3-434b-4924-b8b5-f28944bb3c43';
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