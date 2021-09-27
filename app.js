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

// createHarvestNode(atanacioHarvestNodeId);

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

const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
const claudiaYJuanWetMillnodeId = '89b0ea0e-cc31-4da3-a22f-5bd1ca6eb3ae';
const luisWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const JoseAntonioNolascoWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const mariaAdelaWetMillnodeId = '645bbec5-6faa-4185-8c54-ca9851a9b638';

const atanacioWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';

// createWetMillNode(mariaAdelaWetMillnodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = ["6398efb4-93f6-4f20-9492-bb2f143a798f", "e2f5ce92-64d9-4117-92ee-5ce5e529fa2e", "eda9dec6-7ca4-43ea-93df-268ac1c583e1", "ef6e719f-51d2-42da-b2c0-64af31257abf", "dcbeeff6-b249-4c4c-b41d-82780bf60bde", "3d6f691f-cc1b-45db-8a31-96e2125e1796", "ef9e799d-df76-485b-9568-bab04e1c3b42", "6f9320d8-0101-4d31-9b6c-17ef5185ab11", "66600c6a-213d-44d3-9f54-f113a6e8a0e9", "5d670026-87ea-4b61-b7d6-cb9cc19ed06c", "ece8a4c8-adab-48f9-bebd-9f515cf33b25", "8745a91e-65ca-4ab0-a305-e1c97826de8e", "19eff3c6-34c7-48fe-b0b8-3b2369c32849", "d0f65066-0945-4605-940f-d4d73b095798", "0e62115f-95ba-4850-9c17-f06fd792863b"];

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
const exporterIntakeLots = [];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["769f5740-6d1f-4c14-9506-fe593a5bee36", "675b8e7e-12c7-478b-8fff-3a952490d7a1"];

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

const exportLots = ["13fc64a3-f281-4c7e-901f-26cfe5df6b87"];

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

const importLots = ["3b7a6ffb-c0c2-4305-ace0-a602e9578460"];

const fetchAndStoreImportLots = async (importLotIds) => {
    for (let i = 0; i < importLotIds.length; i++) {

        let functionCall = await createImportLot(importLotIds[i]);

    }
}

// fetchAndStoreImportLots(importLots);

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