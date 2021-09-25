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

// createHarvestNode(mariaAdelaHarvestNodeId);

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
const harvestLots = ["48a48ecb-56f1-429b-8698-4be8c3aa3b42", "6fc00826-d3e2-4874-b810-1826221db3bb", "cadf613c-2df3-46b6-98c9-4bfa13869282", "33e6a7de-63f9-47f6-a9dc-a9df9ec5a148", "91f1b4df-73e7-446c-954c-3e372ec95cff", "1724806c-cd59-4586-9aa6-348878ff7543", "b443452f-398a-4b1d-b127-ca784c49fb92", "053b33c1-e124-431f-a15c-c521942b32e4", "b73d71c3-2165-4049-87d4-b58251dad7ba", "42586f17-44d9-44ce-b62b-7e7f0da5e23f", "a5b50adc-5718-4a64-a7be-79004f1246b9", "06235282-aa0b-493e-8ee0-310b1edcc124", "578c2412-810d-4a35-a607-9ac14631eda9", "5eddce01-f522-4456-807e-24e955954dd4", "7918d529-fb25-400c-940a-e72f856b112a", "de269a15-096c-41f1-b986-42a2b3734453", "b2693947-739f-4e41-86b3-9c12732ed2ac", "56980d5c-af91-4fe1-ada6-335a2de62d61", "5b438067-6d32-4b32-80aa-9f292b6e7259", "c07945c0-ebdf-421f-8f84-1674f35f3634", "0d3882f7-04ac-4728-a255-953c565e9998", "aed5cc7f-8f8b-4534-a749-aecc335304bc", "ce9fef93-db57-47a6-9963-2ec394090161", "6edb282a-fd9e-4b18-b5fc-dbcb7421089e", "d81c8c35-0db6-456f-8019-d964f39a1911", "58018e69-9f1d-4e17-a22f-a9e17fb54c18", "8244c217-64c1-4fad-9853-de5f11ea3504", "c483e104-515f-4c69-9d81-2046449483c2", "ed72a7b2-cfc0-4caa-ae79-0531c0379823", "b5e378d1-4bd0-4027-9b67-f67f86f4d003", "374b46c6-1705-4b27-9a76-28dc5739638c", "eee888b2-3e39-471b-95bb-4764e4c3bb3c", "9ebf90c8-747e-49d1-8fec-1e711b0ce023", "804255c7-83bf-4ae9-9536-1e0e206aecc0", "012e25a1-8e67-4011-8fb4-d137a42a9196", "6cbb6277-306f-4bc3-a8eb-af96824115fc", "285cdb94-db71-40cc-9669-035f4082e839", "1075337f-f744-4ae7-9723-b16aab2fbaa2", "4973f824-a917-43c5-9138-91a9defb4904", "91dd9a0d-7a6d-44ee-ac71-858ca9865dc7", "7a746ef2-3ed0-4d52-9098-4b29f3ab6193", "c2bfbd3d-33a9-4aa4-88c6-373fdf89fc35", "4d45a435-d9c3-42a8-bffc-20b042f64b57", "c250c9bf-1473-46dd-b4e7-499e2c3d21f1", "8f099fa6-637e-47e9-8e22-f660285e7993", "3f5b3045-c332-4d2e-b7e8-239389597f97", "071b4506-5249-4ad0-ba9c-c63f85b18916", "0f75310e-defc-45e9-919e-32b94a2d333e", "9e6c53ab-12de-4630-864f-43bf504bdaa5", "014b21ae-db94-447c-9a60-c80d3b1d3cfd", "d7f8fbfe-113a-473b-9219-617b17e525d8", "a29e3237-524c-4015-81df-e383c85e1528", "2c421d3e-57fe-4547-9935-3f7bf8647572", "8cf61b26-9409-4ac0-9492-8f13072dec17", "81174c83-a811-461d-a6ab-357cd2638054", "51d00281-1a3f-45d4-8df2-b00f252449e7", "ba558f8f-f315-4e81-add4-7f4d53203a33", "29046dfa-318d-4314-a2f0-08507911af75", "f8fd5526-6765-4840-88cb-95c25f5afe25", "2dd4445f-29bf-4ae5-b5e0-82bc79b32c4e", "289f2796-4fa8-4b90-8c29-fc184517f5c1", "8bc9f79e-9170-4de2-8669-14dc5880dd24", "40c32ad5-5179-4094-9837-f843cd6616d8", "2bce6747-e869-4dae-adfe-4a07f73d1e1b", "c1da1ce2-0841-42a2-98d4-25259e222365", "0a8bc414-8514-49eb-b710-35cb63d3df14", "b151416a-37bc-40af-8f27-1c27acb1cda6", "3960cb19-214c-4afd-ba80-4c368368591f", "f6a3a36e-5921-4bd1-b217-795c8ad6d4f5", "a35830e9-2157-4ce1-9d93-4cf97314d87d", "ffbbdd44-4cc1-4a5a-93d5-bc7390063886", "d798b8d6-e673-4387-bed1-8408b00a396b", "b0ab5f70-3a4c-47ed-a7cb-c6d18aa09b5c", "41ed20ba-f803-4ff1-aae4-7d93425f1f35", "cbe8827f-19ae-416a-9bbd-5282df88d1d2", "55b02d45-52ab-476d-86da-2c85786c17bf", "956fbeb2-794a-4899-9865-8c60e805a063", "2a32dbf5-fc52-4f35-bee1-c75a6dd5f069", "c7855212-35e7-4ab2-bc95-2d67e7eb3ef5", "55e0dd58-1972-4c24-862c-7ccc32d746c0", "2e3cf3a2-c0b6-4b1d-ac81-5b9a26e211a5", "fd226169-803d-4757-8c58-3afe2fbe3e3c", "e557f7e6-c51d-49dc-9692-a20f9b888c19", "30a77e33-6b49-4df7-b90d-afbea2227c6a", "efb127a6-aec3-473b-92d9-e63bce12f649", "208b2cd1-57d7-4588-a701-1bedb322e2a5", "8fc8681f-5a99-4dfe-a773-b7d6fd7de029", "a74df403-f1ea-4f3a-8e5b-9acc1a332d0d", "8d9150fa-90cf-43dd-ad28-3e432693dc4b", "6e896fc6-851c-40c8-bfc1-0575d3232d16", "b7cde1a9-304b-425a-847d-bf0ae16fbfaa", "57455b8c-e995-4c04-9817-ab7aed43307f", "377b939d-2f8b-40a7-8004-7303913806f2", "0bde4d67-919f-4311-a1d6-09e6a5f286eb", "0f0eb18f-e124-4646-a5a9-0eca046f45bb", "c96b2172-46b4-41f5-bff4-a2290d2592e0", "62c00f62-9ff2-482f-94ea-eb03cbcb6588", "0cd683e4-f6cd-4dbb-a7e3-6ff8c9ed27b8", "20c6fda6-617d-4dcc-9476-e180250acee4", "5a6cd615-1b35-4e3c-b392-89242dd35431", "6156d7e0-b7d3-487a-ae71-aae572b98e46"];

// fetchAndStoreHarvestLots(harvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
const claudiaYJuanWetMillnodeId = '89b0ea0e-cc31-4da3-a22f-5bd1ca6eb3ae';

const luisWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';
const JoseAntonioNolascoWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';

const mariaAdelaWetMillnodeId = '645bbec5-6faa-4185-8c54-ca9851a9b638';

// createWetMillNode(mariaAdelaWetMillnodeId);

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
const exporterIntakeLots = ["bc165efb-9880-4e13-9b83-0d1cf2a97922", "8bf545bd-aff3-4a35-ae5d-7f2b4eb41496", "52f58f21-15c1-4365-8197-46dab4b2f4e4", "73547252-7073-426b-8eab-f7d85864375b", "3e02aca4-d579-4e48-906a-6ee3d4df5be3", "88cde3ff-6052-4ad8-a2dc-0d49ebdcdc45", "6ebff976-9043-414e-9bf8-2f654ed71244", "5d4ffbba-6237-44d9-bdf5-d78f2038f90a", "d5fb9c06-8ae6-4fe8-8b89-0cb7868e583d"];

// fetchAndStoreExporterIntakeLots(exporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const dryMillLots = ["fd58a312-85ff-408b-8da7-abf8a997028f", "f29dd45b-243c-45b4-8f3a-74753387f241"];

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

const exportLots = ["ffc6e8f4-96fe-43c0-ba7b-5b0fa0c7dc58"];

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

const importLots = ["e1d5bfd4-6411-4d01-a045-1a0ab5c13f73"];

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