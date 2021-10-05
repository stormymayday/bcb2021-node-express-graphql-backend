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

const mirianHarvestNodeId = '1dd07753-5a46-4151-a720-badaa9462153';
const claudiaYJuanHarvestNodeId = '702079e1-62c8-4087-bc82-544acf15d141';
const LuisHarvestNodeId = '5b10dd8f-2d9b-4595-98ab-4896ece46466';
const JoseAntonioNolascoHarvestNodeId = '8c8a341d-112d-43a0-bc28-8d7b5eceb697';
const mariaAdelaHarvestNodeId = '9efb04d1-76ab-4dae-94dd-29f0b0105fcc';
const atanacioHarvestNodeId = '174a5f0c-0a98-46b9-b1af-c3fee2e78470';
const fidelinaHarvestNodeId = '77073017-c640-4822-ad6d-7e6fd51da0f8';
const francisHarvestNodeId = 'bc4fb3d0-97c9-4b84-946a-406bb7901de9';

const adanHarvestNodeId = 'd7a3d524-d8fa-4f0d-b695-e5c7dfbc09a2';

// createHarvestNode(adanHarvestNodeId);

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
const harvestLots = ["d3448b76-501f-4e71-a554-bd418f08f8b5", "6c99f5eb-baf1-4ecc-a06c-4541198a2563"];

// fetchAndStoreHarvestLots(harvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
const claudiaYJuanWetMillnodeId = '89b0ea0e-cc31-4da3-a22f-5bd1ca6eb3ae';
const luisWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const JoseAntonioNolascoWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const mariaAdelaWetMillnodeId = '645bbec5-6faa-4185-8c54-ca9851a9b638';
const atanacioWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const fidelinaWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const francisWetMillNodeId = 'eafdbb3c-c5aa-4648-a419-0baaf95f89ae';
const adanWetMillNodeId = '57d900e5-bcc2-45f7-9776-e4b86d317abc';

// createWetMillNode(adanWetMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = ["7807d90d-29da-407f-bf5d-48481cc84ca2", "0c089ea3-e789-4c47-b175-261a47450e79", "f9cee52f-0974-41fd-aa03-dd2ad4030529", "4b86fb22-d3ca-4160-bacf-51a22d52a874", "48f8dedd-3837-42aa-a302-d9f706278288", "3c6863e9-6ae8-4cb3-8e45-f669c513f186"];

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
const exporterIntakeLots = ["9f3547ce-84fe-42af-9ba8-a1bc223ebd7a", "81960c31-69f7-4620-9ddc-907e16d6e8fe", "02f1b2f1-a3a3-47b4-8e40-ab212e0122e5", "96cd78af-e917-407c-a381-bea7273fc3a9"];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["d6f301d4-15dc-4f4a-a6d1-19f9ed39f0e9", "8f82a71e-0052-45df-b503-7567bbfcd6d6"];


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

const exportLots = ["ad7e60c3-f011-43e1-bb92-f830646a50d0"];

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

const importLots = ["577493d1-ad70-4b6c-9d64-12ddbbbeaa82"];

const fetchAndStoreImportLots = async (importLotIds) => {
    for (let i = 0; i < importLotIds.length; i++) {

        let functionCall = await createImportLot(importLotIds[i]);

    }
}

// fetchAndStoreImportLots(importLots);

// *********************************************************************************** //

// *********************** Creating an Roaster Intake Node *************************** //

const qcccRoasterIntakeNode = 'bbb8b444-ad7b-4caf-8d82-d30eee42d357';
const oldSoulRoasterIntakeNode = '';
// createRoasterIntakeNode(qcccRoasterIntakeNode);

// *********************************************************************************** //

// ************************* Creating Roaster Intake Lots **************************** //

const qcccRoasterIntakeLots = ["8867ca16-4ad9-49f2-bca4-0b581190d43e"];

const fetchAndStoreRoasterIntakeLots = async (roasterIntakeLotsIds) => {
    for (let i = 0; i < roasterIntakeLotsIds.length; i++) {

        let functionCall = await createRoasterIntakeLot(roasterIntakeLotsIds[i]);

    }
}

// fetchAndStoreRoasterIntakeLots(qcccRoasterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Roasting Node ***************************** //

const qcccRoastingNode = '302f1a90-0600-4fcc-831c-b417bd4dcb8d';
const oldSoulRoastingNode = '';
// createRoastingNode(qcccRoastingNode);

// *********************************************************************************** //

// **************************** Creating Roasting Lots ******************************* //

const qcccRoastingLots = ["5879a65e-2a44-4787-82a9-6cd291589767"];

const fetchAndStoreRoastingLots = async (roastingLotsIds) => {

    for (let i = 0; i < roastingLotsIds.length; i++) {

        let functionCall = await createRoastingLot(roastingLotsIds[i]);

    }
}

// fetchAndStoreRoastingLots(qcccRoastingLots);

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