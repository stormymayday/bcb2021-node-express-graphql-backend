const { buildSchema } = require('graphql');

module.exports = buildSchema(`


        type HarvestLot {

            _id: ID!

            harvestNode: HarvestNode

            harvestLotId: String

            harvestNodeId: String


            organizationId: String
            marketplaceId: String
            productId: String
            lotName: String
            lotType: String
            lotDetailType: String
            createdDate: String
            lastModifiedDate: String
            productName: String
            productToken: String
            productSku: String
            organizationName: String
            currentWeight: String
            currentWeightUnit: String,
            absorbedWeight: String
            absorbedWeightUnit: String
            quality: String
            lotIsOpen: Boolean

            images: [String]

            ammountPaid: String
            currency: String

            coffeeVarietal: String

            harvestDate: String

        }

        input HarvestLotInput {

            harvestNode: HarvestNodeInput



            harvestLotId: String

            harvestNodeId: String
            
            organizationId: String
            marketplaceId: String
            productId: String
            lotName: String
            lotType: String
            lotDetailType: String
            createdDate: String
            lastModifiedDate: String
            productName: String
            productToken: String
            productSku: String
            organizationName: String
            currentWeight: String
            currentWeightUnit: String
            absorbedWeight: String
            absorbedWeightUnit: String
            quality: String
            lotIsOpen: Boolean

            images: [String]

            ammountPaid: String
            currency: String

            coffeeVarietal: String

            harvestDate: String

        }




        type HarvestNode {
            _id: ID!

            harvestNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String


            harvestLots: [HarvestLot]

            organizationId: String
            marketplaceId: String
            defaultLocationId: String
            nodeName: String
            nodeType: String
            nodeDetailType: String
            createdDate: String
            lastModifiedDate: String
            organizationName: String
            images: [String]
            videos: [String]
            documents: [String]
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        input HarvestNodeInput {
            harvestNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            harvestLots: [HarvestLotInput]

            organizationId: String
            marketplaceId: String
            defaultLocationId: String
            nodeName: String
            nodeType: String
            nodeDetailType: String
            createdDate: String
            lastModifiedDate: String
            organizationName: String
            images: [String]
            videos: [String]
            documents: [String]
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        type Farmer {
            _id: ID!
            farmerName: String!
            harvestNode: HarvestNode
        }

        input FarmerInput {
            farmerName: String!
            harvestNode: HarvestNodeInput
        }

        type RootQuery {
            farmers: [Farmer!]!
        }

        type RootMutation {
            createFarmer(farmerInput: FarmerInput): Farmer
            createHarvestNode(harvestNodeInput: HarvestNodeInput): HarvestNode
            createHarvestLot(harvestLotInput: HarvestLotInput): HarvestLot
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }

    `);