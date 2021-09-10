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

// createHarvestNode(LuisHarvestNodeId);

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
const luisHarvestLots = ["47be1a74-d557-4a08-bd67-19dba8ea1743", "ff504b1d-08f8-4601-88eb-71b0aa2c1660", "9768270b-cde3-45c8-a914-f30f82dd730c", "ae36541e-e308-4bc1-be3f-72ea560abe62", "a54d9f4e-af79-4653-8ea0-2502fe340ecd", "8ba7556e-2723-4213-89c2-86e2aeb8d3ae", "dfd74d91-0ef3-4b29-89bd-12008bb20ddd", "7fdcaf9d-734b-4cac-9834-8e7d45203f53", "fc88235a-5305-4954-994a-df1d74a2852e", "9d0fc070-fd6b-4b53-b241-7a937eef8558", "bdf097f2-aa75-4933-88b8-8ed0c13c0385", "20d58cf5-0572-451c-b8c3-5f13614638fc", "f98aa450-68bd-460b-8bbd-74d364b86c6e", "19927485-474f-496a-899a-6505dbd52d13", "9176f2b1-3e78-408a-90a4-3d893606cbc0", "43b9ee7b-e912-4282-a4c6-6ba6ae8b1b38", "3365fe82-48dd-4c6e-bdc4-e663df9d7ca1", "5f7bbb86-ebed-4565-8d7c-cd0e82a9bc3f", "39052ea8-2159-4d6d-8963-14d6801faccb", "79b8c465-b067-474a-92dd-4954efa8ea43", "5f2880e9-5d67-4d84-b798-e81e04e6aa48", "63a23cc0-f333-4338-b02f-36d09f60fe3b", "bdc6a2f9-dbf6-4216-a89a-db6c24e2a9aa", "c557daf4-2c64-453f-b117-42848c79f78a", "6e236d66-5889-48fd-92be-6c4d674e9bda", "cf8a8296-7d55-4287-80d2-bcef0be293d2", "f5177779-f071-40fe-9f37-fd2f7a76dc5e", "bfe11c4e-4cca-4e51-ae8c-648178add29e", "067b8aae-0182-4746-b4bd-b86af7315d5f", "c5d17be7-1dd8-45da-ac23-893701805d26", "635fcd22-9488-4c50-bbd8-85839e82d56e", "7107c75b-2d7a-4105-a348-b16b049ea45c", "0f9a5ee4-f491-4bd0-8b0b-a24096ce4c13", "93162ecb-e484-4625-9018-cee15c1d87dd", "67dcbdc1-900d-42c4-ba2d-8634cf88d1df", "70bd25c5-eed4-4644-bd33-ac86320ee467", "23c0140c-1506-47b2-bb36-fe657e62615f", "6102e9ad-581f-479f-bbbe-648a2badddf6", "99069fc1-e3ae-4d8e-916d-dcbc55f9dd89", "bda04721-ac76-4929-850b-d2882462f05e", "ae3126a7-7ea8-4ded-b69b-8c2fd913a0a3", "87c13d6a-19f9-40b2-abf9-f1695201147a", "fcfcfa6f-816c-46bc-be57-39dd4af8d6f5", "8beb343f-ae83-410e-87d4-3d070425c463", "44c72cdc-2ed9-472e-ae31-adc588d7d706", "21492528-992b-4f07-8602-aabdf4268bd0", "16a5ef1c-fefd-4607-abf3-1404d0191cc4", "8664cf7d-4706-461d-b345-2bbf64f2aa1f", "cdd950a2-fbcd-4ccc-aa01-4efbd9970e5f", "6282004a-0d10-4716-9e7d-335f8bad4e23", "50ae05c7-b677-46be-bd4b-17cc929b1a6f", "b47c1117-57a5-45e5-932a-29fd517e11f6", "54325cef-4733-4a43-855a-c75153f9623d", "2252dc6b-fe02-4759-9ff3-a20a32947c1f", "c1f135f7-29ef-47ec-ae79-916e19745cd8", "e5839cd2-6ad0-4350-afd1-e63d221ac3f3", "ec91a3c6-a37c-4a8a-9424-298cd67cf0bd", "a3b58040-02a5-4569-8401-5b04c2fe9c53", "c2a22194-d472-4de5-a92b-3dfeb99309e1", "2c757ca7-f276-488b-8f40-69c389a3d6c5", "37544031-b499-4113-a6b8-31c7c5106424", "6617114e-d11d-4690-8453-8f1763baff64", "b01ddff4-9b33-4ec2-bd21-90088af7a08d", "c4de8beb-e5bb-46ac-b778-35d9a1bf9144", "0ced812c-2a48-43ce-b863-bfda8049c7ea", "49ad6533-5370-4bc4-9ba0-c1626f099d08", "c38c6d56-e148-484c-a6e0-663882d831a0", "76e5d999-9098-4162-b82f-bc85da18769c", "d759be6b-7687-4c0b-a053-34380525a8af", "964946d4-a312-4853-bdbd-2c44806d6044", "ca7aa867-441f-4238-8598-516890bab339", "bbd86b84-0854-45a7-8bd6-8805774330bd", "935cc8aa-6c29-4cc2-8eb1-320b555526bb", "55619bf7-862b-4176-9f6a-045d210fb21c", "9ff7dc88-e7d1-4a6d-acf2-b92d4630d85b", "99ba59f0-549a-4189-aa2e-a626b6161b31", "42994186-08c7-43bf-b206-2367276b8e1e", "5b60fa68-437c-459d-9486-cbc98d85e711", "5d924ac9-3432-4255-97fc-120e3940582f", "9a281638-78a2-421a-a71a-466a05fd19fc", "ad71395d-965e-487c-878d-2f05be11bde4", "c1fa58e5-b50e-4499-a4cf-5a7f4058b404", "febe69bb-f79d-414d-b49f-79a680d8f861", "b825b69c-2447-4b26-a6bf-0b518b425139", "71df03e4-8985-4a6a-9502-f2b18f72de01", "25487910-58b3-4746-b682-f448aab78818", "59c960b2-b44c-46c7-89d8-435989e180ea", "a685be46-6023-4819-83ff-fe1d08805a41", "edb05021-7178-4041-8ea7-0ff68e03b0c7", "615b1b12-22f4-442e-9467-953e4086d31a", "2a5a465a-495e-4f23-80a4-f1091c4f9221", "92771135-43fb-4433-a5f5-623a63a77555", "44ad9b1d-0f2c-4896-9f04-95ccfb2a5f3c", "7f7b7dbe-5988-4ba3-af09-d9efd1f33d34", "363b214b-0598-4f96-b85b-866dd5e036fe", "10ee0833-aa50-495a-8c4c-f2eb5cc574f9", "0faa53d1-c4d6-4f32-82d2-edd3505f8dc5", "f4ce6140-1358-4b98-8b27-19e9e09965a7", "8489bef1-7552-4477-8adb-4c09414f43bf", "86ba1025-3b45-49d8-97be-d1a92e2e46df", "e3a49c3a-2e6a-446a-a93b-f33ff25c7863", "d13337b2-af13-4365-9d19-718e6b05ee41", "9fe2ac2b-68d8-4380-a2ee-753eefa59365", "36f3b4a2-d9cc-48a9-b8b4-d368e8728b9c", "c645ab54-155d-440e-9e91-7b8a32424fbf", "51f3e106-bfc8-49e5-ba31-1b255c9912ce", "646bbaaf-8879-4e38-935b-f6f5134c1324", "c966a77d-ab37-4bc5-90be-9f8bc5b29a2c", "9834a14f-8132-4617-86dc-09a0382f2323", "868bfe3a-4300-4adf-8893-d6cac9463435", "79377a47-d2f9-460a-b39a-2b196c8513b1", "078671f2-b2c5-479f-9d55-480429137bf0", "b10a4575-3601-402b-a881-c0bcd860bed6", "56ed191d-92da-48c5-af50-3b8b117727d6"];

// fetchAndStoreHarvestLots(luisHarvestLots);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Node ***************************** //

const mirianWetMillnodeId = '33cbd53d-ea1c-4b45-a669-b8a3076a0436';
const claudiaYJuanWetMillnodeId = '89b0ea0e-cc31-4da3-a22f-5bd1ca6eb3ae';
const luisWetMillnodeId = '52adf38d-af7d-48b8-b3f1-d0c2ca9108b5';

// createWetMillNode(luisWetMillnodeId);

// *********************************************************************************** //

// **************************** Creating a Wet Mill Lot ****************************** //


const fetchAndStoreWetMillLots = async (wetMillIds) => {
    for (let i = 0; i < wetMillIds.length; i++) {

        let functionCall = await createWetMillLot(wetMillIds[i]);

    }
}

const presentLots = ["1728d430-cc74-4273-9748-e05a0bfd0f00", "a84ffa71-7ae5-4a4f-b2e0-be77ef2cbe60", "0f77e2d7-2734-46a8-b15f-ea0262399ece", "05cfb664-7d6c-4fae-85d8-7fff2319b8e0", "6a7d8829-aa17-426e-97cf-27a04659a369", "b9fae9e0-dca0-47dd-9dfe-c5a1be45176a", "377fcbb8-01d4-4090-90a2-6639f12546ce", "84aba33e-b20b-40a2-adaa-ac547227f1cd", "8d89f4d8-ee17-4971-8aac-da24c9d149ee", "3e51e92e-d694-47be-8fbc-7fc0ca720d9f", "dcc869ab-fd78-4b10-863d-f4fae2c446fd", "f638fa27-8876-47d2-8926-c5ba3592cd4c", "84280a57-a444-4c9c-8310-2c5fbe273d02", "675ea3fc-21c0-444e-a59e-0e7a9fcd4d65", "da3c3bd7-44d5-46fe-aef5-8702c4fc397e"];

const LuisWetMillLots = ["298a0ff0-0050-4da5-a464-f471d20c9bab", "24af84db-feac-4beb-9027-40952c8147d7"];

// fetchAndStoreWetMillLots(LuisWetMillLots);

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
const luisExporterIntakeLots = ["80a69be5-7d37-4d1a-8006-bfc80f800420"];

// fetchAndStoreExporterIntakeLots(luisExporterIntakeLots);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Node ***************************** //

const VillaFloridaDryMillNodeId = '326d2dae-9cd0-4b4c-b64d-8874e1d80abd';
// createDryMillNode(VillaFloridaDryMillNodeId);

// *********************************************************************************** //

// **************************** Creating a Dry Mill Lot ****************************** //

const cYJDryMillLots = ["c9eb2017-29ec-4aee-b6ab-e6d300bf6a54", "08bd1b1e-89d2-4f2a-9c0d-c14af26278a0"];
const luisDryMillLots = ["b0e95b48-816f-4660-b178-edcedb92d693"];

const fetchAndStoreDryMillLots = async (dryMillLotIds) => {
    for (let i = 0; i < dryMillLotIds.length; i++) {

        let functionCall = await createDryMillLot(dryMillLotIds[i]);

    }
}

// fetchAndStoreDryMillLots(luisDryMillLots);

// *********************************************************************************** //

// **************************** Creating an Export Node ****************************** //

const ExportNodeId = 'b8a4b60f-552b-406e-84f9-3bafd0b3f904';
// createExportNode(ExportNodeId);

// *********************************************************************************** //

// **************************** Creating an Export Lots ****************************** //

const claudiaJuanExportLots = ["9493daaa-0652-46ff-95b0-ae9698692137"];

const fetchAndStoreExportLots = async (exportLotIds) => {
    for (let i = 0; i < exportLotIds.length; i++) {

        let functionCall = await createExportLot(exportLotIds[i]);

    }
}

// fetchAndStoreExportLots(claudiaJuanExportLots);

// *********************************************************************************** //

// **************************** Creating an Import Node ****************************** //

const ImportNodeId = 'ee761058-6de6-47b3-94ce-33059975764c';
// createImportNode(ImportNodeId);

// *********************************************************************************** //

// **************************** Creating an Import Lots ****************************** //

const claudiaJuanImportLots = ["df1315fd-4bbb-425a-9498-4929a4242ca4"];

const fetchAndStoreImportLots = async (importLotIds) => {
    for (let i = 0; i < importLotIds.length; i++) {

        let functionCall = await createImportLot(importLotIds[i]);

    }
}

// fetchAndStoreImportLots(claudiaJuanImportLots);

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