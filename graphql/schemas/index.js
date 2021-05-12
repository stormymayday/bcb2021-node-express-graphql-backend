const { buildSchema } = require('graphql');

module.exports = buildSchema(`

        type HarvestLot {
            harvestLotID: String!
            lotWeight: Float
            ammountPaid: Float
            harvestNode: HarvestNode
        }

        input HarvestLotInput {
            harvestLotId: String!
            lotWeight: Float
            ammountPaid: Float
        }

        type HarvestNode {
            harvestNodeId: String!
            harvestLots: [HarvestLot]
        }

        input HarvestNodeInput {
            harvestNodeId: String!
            harvestLots: [HarvestLotInput]
        }

        type Farmer {
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