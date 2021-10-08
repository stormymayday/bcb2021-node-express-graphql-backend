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

// createHarvestNode(davidHarvestNodeId);

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
const harvestLots = ["7973e50c-9b2d-49f1-8bd5-cc3822408714", "3c136552-3e0b-4145-bba4-392e51d1f6af", "e160f9a9-9cbe-4836-9a4f-0b49bfe147b4", "66c86495-8285-419d-af12-123b7fbbfb9d", "843f0282-2459-41b8-b426-e1a2653921e7", "e8453af5-7de4-44ae-8eb4-47ac230f6069", "3a0b8258-7b00-4146-bbd9-6f55bce89b3e", "89ccad68-d083-49e2-94d2-925b537f189c", "d55399ba-e8aa-4a34-8cad-b5f2a62fcfb9", "624da35c-d57e-4dd9-af36-e0f6ff73bd4f", "184bc85e-76ef-4395-85c0-109f2b2a15c7", "b1a37ffa-e439-444c-8229-808ef72a6f6d", "ea7e506a-5bbe-4622-8c84-da384a8b247e", "1ca1b803-f2c9-4ae3-86a9-058a60bd4daa", "79c96f0c-d9e6-4c05-928f-c77edffc4f02", "47ec1c95-9d4e-49a8-a1ac-776797037e97", "62d48665-b39a-4d4d-95e1-4ee8934e181d", "4b8d3aae-d07e-462a-abb8-ea09e2145d18"];

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

// createWetMillNode(davidWetMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = ["0dc1e87c-34a7-41bd-90d6-0de024f9e528", "6a249b05-bed8-437d-a92c-916451b4adeb", "3f94fa66-0d77-4370-b7e5-4ea46810d7b5", "604a5f24-0a35-43dc-84a1-b54666ea6896", "4dc1e62b-8e50-4bbc-a1a4-cb0d672a6a23", "1e5536f4-bf0b-4eee-82fa-9a95b36de67d", "98e710c2-b437-4fc6-acfa-0ed59a02a408", "88150a81-c843-4e36-842a-1a976cc33b9d", "f703d391-4fe3-495a-9061-617b30d1bd90"];

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
const exporterIntakeLots = ["4d734267-0796-499d-bb3e-92b8485f2a2f", "a0498c22-75de-4509-95e1-09d8bda676ed", "8f442c4a-4287-4919-b6df-fa2a02e1c769", "e570af19-05fc-482d-96ff-823442e2ccb6"];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["c83aa38b-3776-43f6-a6b3-9edb700b5c98", "f96070f4-c798-4144-9965-9a5f7d68f444"];


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

const exportLots = ["d1bcff34-256f-48fb-93a1-00b0bada253d"];

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

const importLots = ["672a67be-2e15-4df8-af17-dba32e5ed416"];

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