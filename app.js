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

// createHarvestNode(rigobertoHarvestNodeId);

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
const harvestLots = ["b35c2b3b-6577-4f18-b4d1-e2be9a623523", "1b74494e-5eca-4f7e-9c52-45cbf8db2e5e", "bb8d6f6b-2499-4570-8184-cef7bfa36c38", "384b7f15-e0c2-40c1-95e0-9d06b58044be", "8915fa4a-0065-4aa8-b78c-0957b39a0826", "8a35c3d4-c5e9-4ad5-80b6-5d028b4042a9", "c31e8bce-4c05-4566-94be-16e9771dd4bf", "e2a63207-21c2-4926-879a-5960dcec56aa", "67b2322f-6272-4ea0-a52f-0816e0959141", "aa570493-c079-4b7c-b39c-7a4c1fd3bfa5", "5caa3303-6d63-4cde-927b-0d2d3336f1d7", "13112449-49c4-4ad6-ac0b-d3b8070698fd", "70bc3d13-864a-416f-af5e-b36f9668ebf4", "de8b1a82-cc5f-4107-89ec-4b82f6d7a374", "74964099-7246-47b0-917a-d2103b07cb96", "561086eb-39cb-4f8b-a709-abd15c90b457", "1bb4059b-b1dd-4363-a5ea-915227a0f0bb", "0a9c94dd-e387-4900-b67d-58f12fdd3784"];

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

// createWetMillNode(rigobertoWetMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const wetMillLots = ["ce34a674-7438-44dc-a2f9-8f39f87d5b05", "f3c722e4-fc6d-4776-95e0-849f2181b632", "c5b78472-9f23-48bd-98e7-64b1e011fcbb", "36ac0c71-3651-4e1a-ab9c-6b37a046145c", "c04f4309-629f-4380-8b12-e1949033ca39", "5e96b1b2-2415-411a-ba2d-339cbe9e861c", "b53c71b1-2421-4f9a-bacf-e083aa12944b", "b7f8a060-68bc-4e68-885a-01d5ab1ea748", "fc3de86a-22bc-4a74-9548-fbb5f5ce585a", "eb925121-f584-442d-81d3-2b8784b90158", "e19b4274-a718-4cce-974d-e7ee7158b375", "fe4a9bd6-7794-41a2-8736-04428e9505ef", "f4268808-ee10-416c-9407-540681d96c8d", "09ec4d23-2e20-4f5a-907b-627d3478a147", "4980256f-094d-46b9-b649-b75f13561bfc", "d9d1b73d-0adf-4822-a090-8cd271492c9f", "7fe5bdd8-a05a-4e56-be8b-4f287c3e5289", "a0f11b1f-3b0d-4968-98ac-17d2180b03c3", "1be0e463-ccda-4bc8-816c-dd56df2f780b", "f0a9ad8b-cb90-400c-b26e-64e59518d520", "208e0c32-0d03-43df-991f-172d5f34535b", "10820ae0-a8a2-4e59-b48e-92bcb11d52ad", "2c1792bd-03c0-433a-b11d-8efe2ca841a3", "0de8433f-58d4-4055-ba5d-124aabba59a1", "0241dd1a-7d1f-48f6-83eb-a3a694db0ea6", "71159538-d43e-47a9-b2fe-367db5aead94", "82f8387b-0a68-4ec3-ab9c-919f3da5b01b", "197d214c-70ae-4216-a775-4fdf9ce1fe87", "26772ad6-cf89-4926-9ade-b0ca00c6ae4f", "abb6fc56-d8cc-459d-b297-43472c1af171", "10260860-a587-40fb-ad46-f2a9ed2779b5", "462cdad0-b374-495a-8e4f-e818086bdfd7", "5ae0ed7a-2c23-40cb-9d75-3f193093214a", "0df77e8f-87c1-4dd3-afcf-c94c8e623056", "cc9036cd-de5d-43c6-a018-57992598fef5", "ca156f52-d386-4430-a4ea-daf8a8280000", "46873a28-be2b-4800-903c-2c2f799f6e86", "7a60e930-812c-4fae-9943-3d494f11ddd1", "4b3dbc23-bd2d-46db-a8f0-cc28e234b5f6", "0020c70b-b024-4503-87da-ee9c33f521ec", "244ec470-a821-45ab-9b64-f930c588a484", "915532b2-dacc-4b5c-b281-85dbe3b2656f", "78e34d82-b5b9-44b7-ba4b-9ae80d07803b", "a02e5976-ee2d-44f5-a226-4f881bf9830f", "0c9d0ab2-e0e9-49fa-9310-a4f8283dfa6f", "2f5bde89-427c-4c21-a387-57dac10c85e6", "35525876-6f75-45fa-bfeb-255e745fa589", "5289f9c1-7d05-40ad-a735-7a127b2edd30", "d9d73f94-2f10-42fc-8c93-0a390abd2fde", "36f8d94c-8554-4b63-a07d-50099766a35e", "6f98475d-124c-4b6a-8f41-c586cc37cc41", "df365e70-38b4-4974-8d16-5f9547082043", "ba824f6d-5ad6-4d59-a55e-454b7229f6fa", "6316073b-3508-4d4b-ae7d-f1daf47e51e0"];

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

const qcccRoastingLots = ["5879a65e-2a44-4787-82a9-6cd291589767", "a24f95d7-7334-4034-9196-b8e6abfb6358", "a6b00958-250b-4419-a46e-5aa8cda61cd5"];
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