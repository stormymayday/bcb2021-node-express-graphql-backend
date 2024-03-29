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

const harvestNodeId = "";

// createHarvestNode(harvestNodeId);

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

const harvestLots = [];

// fetchAndStoreHarvestLots(harvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const wetMillnodeId = "";

// createWetMillNode(wetMillnodeId);

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

const marcalaIntakeNode = "";
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

const dryMillNodeId = "";
// createDryMillNode(dryMillNodeId);

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

const exportNodeId = "";
// createExportNode(exportNodeId);

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

const importNodeId = "";
// createImportNode(importNodeId);

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

// Claudia
const roasterIntakeNode = "ee83a039-8d87-474c-977c-a28950992d87";
// createRoasterIntakeNode(roasterIntakeNode);

// *********************************************************************************** //

// ************************* Creating Roaster Intake Lots **************************** //

const fetchAndStoreRoasterIntakeLots = async (roasterIntakeLotsIds) => {
    for (let i = 0; i < roasterIntakeLotsIds.length; i++) {

        let functionCall = await createRoasterIntakeLot(roasterIntakeLotsIds[i]);

    }
}

// Claudia
const roasterIntakeLots = ["0108638f-77af-40fc-a8ae-b95635fa9680"];

// fetchAndStoreRoasterIntakeLots(roasterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Roasting Node ***************************** //

// Mario Dionel Vasquez 2022 (did not work)
const roastingNode = 'e6b6e711-ddd4-450f-9892-dc11db682180';
// createRoastingNode(roastingNode);

// *********************************************************************************** //

// **************************** Creating Roasting Lots ******************************* //

const fetchAndStoreRoastingLots = async (roastingLotsIds) => {

    for (let i = 0; i < roastingLotsIds.length; i++) {

        let functionCall = await createRoastingLot(roastingLotsIds[i]);

    }
}

// Luis Nolasco 2022
const roastingLots = [""];

// fetchAndStoreRoastingLots(roastingLots);

// *********************************************************************************** //

// **************************** Creating a Finished Product Node ***************************** //

const qcccFinishedProductNode = '';
const oldSoulFinishedProductNode = '';

// createfinishedProductNode(qcccFinishedProductNode);

// *********************************************************************************** //

// **************************** Creating Finished Product Lot ******************************* //

const qcccFinishedProductLots = [""];
const oldFinishedProductLots = [""];

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