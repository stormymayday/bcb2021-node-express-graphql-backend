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

const getNode = (nodeId) => {

    fetch(`https://bext360api.azure-api.net/retaildev/v1/getnode/${nodeId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.BEXT_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);

            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                    mutation {
                        createHarvestNode(harvestNodeInput: {

                                harvestNodeId: "${data.nodeId}"


                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                defaultLocationId: "${data.defaultLocationId}"
                                nodeName: "${data.nodeName}"
                                nodeType: "${data.nodeType}"
                                nodeDetailType: "${data.nodeDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                organizationName: "${data.organizationName}"


                                country: "${data.defaultLocation.country}"
                                city: "${data.defaultLocation.city}"
                                state: "${data.defaultLocation.state}"
                                latitude: "${data.defaultLocation.latitude}"
                                longitude: "${data.defaultLocation.longitude}"
                                elevation: "${data.defaultLocation.elevation}"
                                elevationUnit: "${data.defaultLocation.elevationUnit}"

                            }) {

                                harvestNodeId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

// Mirian Vasquez
// const nodeId = '1dd07753-5a46-4151-a720-badaa9462153';
// getNode(nodeId);

const getHarvestLot = (harvestLotId) => {

    fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${harvestLotId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.BEXT_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);


            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                        mutation {
                            createHarvestLot(harvestLotInput: {

                                harvestLotId: "${data.lotId}"

                                harvestNodeId: "${data.nodeId}"
                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                productId: "${data.productId}"
                                lotName: "${data.lotName}"
                                lotType: "${data.lotType}"
                                lotDetailType: "${data.lotDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                productName: "${data.productName}"
                                productToken: "${data.productToken}"
                                productSku: "${data.productSku}"
                                organizationName: "${data.organizationName}"
                                currentWeight: "${data.currentWeight}"
                                currentWeightUnit: "${data.currentWeightUnit}"
                                absorbedWeight: "${data.absorbedWeight}"
                                absorbedWeightUnit: "${data.absorbedWeightUnit}"
                                quality: "${data.quality}"

                                lotIsOpen: ${data.lotIsOpen}


                                images: "[${(data.images[0] ? data.images[0].urls[0] : "")}, ${(data.images[1] ? data.images[1].urls[0] : "")}]"

                                ammountPaid: "${Object.values(data.values)[0].value}"
                                currency: "${Object.values(data.values)[0].asset}"

                                coffeeVarietal: "${data.customData['CoffeeVarietal.Measure'].value}"
                                harvestDate: "${data.customData['HarvestDate.MeasureTime'].value}"

                            }) {

                                harvestLotId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));



            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

// Previous image fetching/storage logic
// images: "[${data.images[0].urls[0]},${data.images[1].urls[0]}]"
// const harvestLotId = "bca0833a-5ca8-4ab9-9a09-f865b3e83fb4";
// getHarvestLot(harvestLotId);

const MirianVasquezHarvestLots = ["bfee17b5-7e1d-45d5-9b50-2df1716823a0", "30ce720e-7614-4747-93a7-656ca9e8470a", "2316aa78-741b-4b98-aacc-7f58e1e8f550", "96cbed9b-70e5-4450-827f-20b02e397bf3", "ff44eb7f-1ae9-4381-8f11-2ff70a244304", "fb2e3713-69cb-4333-9042-99181f53fc52", "a27b493e-0bab-4798-80c0-0342891346fc", "17780fb1-e558-44ba-8d61-3f084177716d", "7b8097a4-cad9-4cb5-8f5c-56c3f547e19e", "1b03a1d1-0d2e-49ea-b52d-a381eeb984fe", "8d42099e-c9eb-43b6-81be-616921b7671b", "78a24ef7-857c-43f8-8b86-e00a8386a387", "5e53d447-aefb-4bb2-ae31-f9b7cbfb07ba", "aa9c47b0-0a0b-4a1d-b799-bb31de573da7", "c3670294-d4b9-45bd-a6ec-eab6aeda4866", "d6af2c93-2b50-4b0b-874d-841901f6b7ae", "f0e998d1-60a7-40f2-827c-40ede3f3f23b", "77becd0d-9e8c-4d16-b202-bf0e49f66466", "bc63bd88-cd19-4041-b4c1-40f26b38681e", "babd0a7f-cceb-4a6b-a4cd-e3060b3733dc", "e542a781-deaa-42c5-884d-fd7595c117e4", "93a69237-5348-4623-9adf-ff0e39326579", "9ebf1193-5d95-4a81-aba2-d1b88941be45", "a3bb6f75-7189-46b2-b997-e47c032db524", "e6d2169c-1832-4d6c-99f0-ef7ce201814f", "bca0833a-5ca8-4ab9-9a09-f865b3e83fb4", "fb23bd3c-0e7d-43bb-a19b-7662fe200b4f", "cf8be016-e1fe-4599-ae95-67ad0f0953a7", "be21e722-c84b-4b59-823b-8556be2cfbbd", "81594155-075b-4d2c-b8e5-c2a1e7bab24c", "7c4d9215-f8ba-47f2-abaf-3a605583c9ed", "41607094-0602-4d83-a1c6-72f3673158b0", "5fac7aec-4e7e-47bf-bf5a-3d33d4109fd9", "d67682b3-421f-45e6-a8ae-9a55b453c67e", "d6a87e15-fb8e-4e26-8160-3e360d929786", "8b639ef4-0e29-4a39-a245-dc2c9cce1335", "bbe52a53-b237-4398-a9d5-9453fd36a837", "edf487d8-a450-42ea-bd1d-0431621b0056", "aa9780da-fc38-4428-8d0d-23dc89526123", "9307fafd-a7e5-4a18-a29e-9d3b1041a097", "c94a2c91-5e20-47e4-b322-3cb563154fde", "4773453d-fcb7-44c2-96f5-b055ed183804", "17086fa4-111c-4c22-9e29-c4ddf3921329", "d599765c-76e3-4a43-bfda-81762ef926cc", "2c8c51d9-b6de-42ed-be0f-63bc29b35916", "1ac8e8fd-5b86-456f-ac7d-e57da40bc6c5", "99073dfa-eed7-43e1-a877-8f4dcb1ca857", "6cba7557-40fd-4097-a094-3db0e56728ef", "7511fa2a-5d56-4363-9b29-ba97dd3efe47", "4c4a51fd-8c34-4096-ab95-7bacab0ff8f1", "9f8d17b9-8f8f-4748-b7fd-759649733771", "850446e1-fd9d-4066-87b1-7e26754bbe29", "2e141ed7-d9f4-4ba4-8a07-4612e68d55de", "158e60aa-4758-4601-baa8-c7b4ec144bb5", "16b9bbdb-9257-4996-a651-cad3fe257006", "9c4de86c-692a-4759-8e8d-07d5d281c9ed"];

const fetchAndStoreHarvestLots = async (harvestLotIds) => {
    for (let i = 0; i < harvestLotIds.length; i++) {
        let functionCall = await getHarvestLot(harvestLotIds[i]);
        console.log(harvestLotIds[i]);
        // continue;
    }
}

// fetchAndStoreHarvestLots(MirianVasquezHarvestLots);


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