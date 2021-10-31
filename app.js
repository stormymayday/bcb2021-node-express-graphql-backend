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
const gumercindoHarvestNodeId = '6e374ca1-ea5f-4cc4-863e-ece4143cad48';
const davidHarvestNodeId = 'f5b260cf-afd8-4525-9533-4562a8741f0a';
const rigobertoHarvestNodeId = 'c0cd6532-86dd-4693-843a-5825cabb4e8e';
const gloriaHarvestNodeId = 'a4c8bf16-7c5b-44d9-a25b-2635bc9d803e';

// createHarvestNode(gloriaHarvestNodeId);

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
const harvestLots = ["d906dba4-b72e-46e9-ad84-c27a1db41555", "925b22da-fa64-412e-b21c-8527df86e83a", "3961291c-3d9f-473a-afb2-b331cbab1898", "daf2db42-6d60-4c82-9a6b-99dd15ba61cf"];

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
const gumercindoWetMillNodeId = '927a09b8-1014-4ceb-8f46-a56ac87c7ad2';
const davidWetMillNodeId = 'cd219201-cab3-445e-8e3b-9d1888d9860c';
const rigobertoWetMillNodeId = 'eafdbb3c-c5aa-4648-a419-0baaf95f89ae';
const gloriaWetMillNodeId = 'cf1ba230-ad6d-4fb2-9bcc-da415e1bfe72';

// createWetMillNode(gloriaWetMillNodeId);

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

const marcalaIntakeNode = 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee';
// createExporterIntakeNode(marcalaIntakeNode);

// *********************************************************************************** //

// *********************** Creating an Exporter Intake Lot *************************** //

const fetchAndStoreExporterIntakeLots = async (exporterIntakeLotIds) => {
    for (let i = 0; i < exporterIntakeLotIds.length; i++) {

        let functionCall = await createExporterIntakeLot(exporterIntakeLotIds[i]);

    }
}
const exporterIntakeLots = ["36a6572e-4243-4e63-8b17-4fd2c4feac09", "6ee5e20c-4510-423f-b911-355144cb30a9", "7622e784-287d-4158-8ad5-d980d0b0c040", "d80b2661-d423-4287-ba8b-cde6e6e5f942", "996412d2-c9d6-47db-b9a4-17c6db94453d", "3839fd90-1714-42bd-86f8-4130f3d61409", "161a9826-379a-4bbe-8c04-1323d0aa61e0", "448b67e1-b153-44e6-a731-fe49f5c76da9", "9000750e-e9c3-44fc-9f53-98bea9af41ce", "a2473419-1cd1-4435-a876-94ecb7366530", "12980578-d877-4d5e-9bcc-39867708cbd9", "db452897-d415-4ba7-821c-ed4a9e39e58b", "30b044a4-61aa-40bb-abb1-ec59b187303c", "4d2baca8-84ce-4268-81cd-63c81c7ab849", "1c4ce1dc-d2a8-41db-b03a-2d92c035f45f", "8a314502-b660-43e3-a369-b294ad510809", "cc7726a0-4c81-4872-8f1b-cf36245fa909", "126111fc-f5e3-44d4-9e0f-7056219d9442", "05499117-8811-4111-8c9f-c2300ad8be48", "11f98135-5d24-4d36-b81d-46855e0d0dce"];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["c91dbba6-2855-44e4-83f1-70adba2bf3c0", "0d767578-422d-4d33-9fd3-7755bc755625"];


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

const exportLots = ["17293754-5f3a-4566-8c7a-cf7087c5065b"];

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

const importLots = ["2e64ff95-1652-4c7b-b922-d62f13bb76ce"];

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

const qcccRoastingLots = ["f0a94695-a372-49a4-8612-1c05d41a8902"];
const oldSoulRoastingLots = ["3934279c-5576-4163-b75f-e54e00668bab"];

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