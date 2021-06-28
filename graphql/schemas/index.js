const { buildSchema } = require('graphql');


module.exports = buildSchema(`

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            coffeeVarietal: String

            harvestDate: String

        }

        type WetMillNode {

            _id: ID!

            wetMillNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            wetMillLots: [WetMillLot]

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

        input WetMillNodeInput {

            wetMillNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            wetMillLots: [WetMillLotInput]

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

        type WetMillLot {

            _id: ID!

            wetMillNode: WetMillNode

            wetMillLotId: String
            wetMillNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        input WetMillLotInput {

            wetMillNode: WetMillNodeInput

            wetMillLotId: String
            wetMillNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        type ExporterIntakeNode {

            _id: ID!

            exporterIntakeNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            exporterIntakeLots: [ExporterIntakeLot]

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

        input ExporterIntakeNodeInput {

            exporterIntakeNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            exporterIntakeLots: [ExporterIntakeLotInput]

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

        type ExporterIntakeLot {

            _id: ID!

            exporterIntakeNode: ExporterIntakeNode

            exporterIntakeLotId: String
            exporterIntakeNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        input ExporterIntakeLotInput {

            exporterIntakeNode: ExporterIntakeNodeInput

            exporterIntakeLotId: String
            exporterIntakeNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        type DryMillNode {

            _id: ID!

            dryMillNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            dryMillLots: [DryMillLot]

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

        input DryMillNodeInput {

            dryMillNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            dryMillLots: [DryMillLotInput]

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

        type DryMillLot {

            _id: ID!

            dryMillNode: DryMillNode

            dryMillLotId: String
            dryMillNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        input DryMillLotInput {

            dryMillNode: DryMillNodeInput

            dryMillLotId: String
            dryMillNodeId: String

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
            documents: [String]
            videos: [String]

            value: String
            asset: String
            timestamp: String

            processingDate: String

        }

        type Farmer {

            _id: ID!
            farmerName: String!

            harvestNode: HarvestNode            
            wetMillNode: WetMillNode
            exporterIntakeNode: ExporterIntakeNode
            dryMillNode: DryMillNode

        }

        input FarmerInput {

            farmerName: String!

            harvestNode: HarvestNodeInput
            wetMillNode: WetMillNodeInput
            exporterIntakeNode: ExporterIntakeNodeInput
            dryMillNode: DryMillNodeInput

        }

        type RootQuery {

            farmers: [Farmer!]!

        }

        type RootMutation {

            createFarmer(farmerInput: FarmerInput): Farmer

            createHarvestNode(harvestNodeInput: HarvestNodeInput): HarvestNode
            createHarvestLot(harvestLotInput: HarvestLotInput): HarvestLot

            createWetMillNode(wetMillNodeInput: WetMillNodeInput): WetMillNode
            createWetMillLot(wetMillLotInput: WetMillLotInput): WetMillLot

            createExporterIntakeNode(exporterIntakeNodeInput: ExporterIntakeNodeInput): ExporterIntakeNode
            createExporterIntakeLot(exporterIntakeLotInput: ExporterIntakeLotInput): ExporterIntakeLot

            createDryMillNode(dryMillNodeInput: DryMillNodeInput): DryMillNode
            createDryMillLot(dryMillLotInput: DryMillLotInput): DryMillLot

        }

        schema {

            query: RootQuery
            mutation: RootMutation

        }

    `);