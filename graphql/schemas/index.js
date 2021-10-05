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

            processingDate: String

        }

        type ExportNode {

            _id: ID!
            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            exportLots: [ExportLot]

            exportNodeId: String!
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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        input ExportNodeInput {

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            exportLots: [ExportLotInput]

            exportNodeId: String!
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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        type ExportLot {

            _id: ID!

            exportNode: ExportNode

            exportLotId: String
            exportNodeId: String

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

            secondPaymentValue: String
            secondPaymentAsset: String
            secondPaymentTimeStamp: String
            secondPaymentNotes: String
            
            spousePaymentValue: String
            spousePaymentAsset: String
            spousePaymentTimestamp: String
            spousePaymentNotes: String

            ihcafePaymentValue: String
            ihcafePaymentAsset: String
            ihcafePaymentTimeStamp: String
            ihcafePaymentNotes: String

            numberOfBags: String

        }

        input ExportLotInput {

            exportNode: ExportNodeInput

            exportLotId: String
            exportNodeId: String

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

            secondPaymentValue: String
            secondPaymentAsset: String
            secondPaymentTimeStamp: String
            secondPaymentNotes: String

            spousePaymentValue: String
            spousePaymentAsset: String
            spousePaymentTimestamp: String
            spousePaymentNotes: String

            ihcafePaymentValue: String
            ihcafePaymentAsset: String
            ihcafePaymentTimeStamp: String
            ihcafePaymentNotes: String

            numberOfBags: String

        }

        type ImportNode {

            _id: ID!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            importLots: [ImportLot]

            importNodeId: String!

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        input ImportNodeInput {

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            importLots: [ImportLotInput]

            importNodeId: String!

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

        }

        type ImportLot {

            _id: ID!

            importNode: ImportNode

            importLotId: String
            importNodeId: String

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

            fobBasePaymentValue: String
            fobBasePaymentAsset: String
            fobBasePaymentTimeStamp: String
            fobBasePaymentNotes: String

            fobPremiumPaymentValue: String
            fobPremiumPaymentAsset: String
            fobPremiumPaymentTimestamp: String
            fobPremiumPaymentNotes: String

            catrachaCommunityContributionPaymentValue: String
            catrachaCommunityContributionPaymentAsset: String
            catrachaCommunityContributionPaymentTimeStamp: String
            catrachaCommunityContributionPaymentNotes: String

            numberOfBags: String
            damage: String
            transferDate: String

        }

        input ImportLotInput {

            importNode: ImportNodeInput

            importLotId: String
            importNodeId: String

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

            fobBasePaymentValue: String
            fobBasePaymentAsset: String
            fobBasePaymentTimeStamp: String
            fobBasePaymentNotes: String

            fobPremiumPaymentValue: String
            fobPremiumPaymentAsset: String
            fobPremiumPaymentTimestamp: String
            fobPremiumPaymentNotes: String

            catrachaCommunityContributionPaymentValue: String
            catrachaCommunityContributionPaymentAsset: String
            catrachaCommunityContributionPaymentTimeStamp: String
            catrachaCommunityContributionPaymentNotes: String

            numberOfBags: String
            damage: String
            transferDate: String

        }

        type RoasterIntakeNode {

            _id: ID!

            tagline: String
            websiteUrl: String

            roasterIntakeNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            roasterIntakeLots: [RoasterIntakeLot]

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

            address: String

        }

        input RoasterIntakeNodeInput {

            tagline: String
            websiteUrl: String

            roasterIntakeNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            roasterIntakeLots: [RoasterIntakeLotInput]

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

            address: String

        }

        type RoasterIntakeLot {

            _id: ID!

            roasterIntakeNode: RoasterIntakeNode

            roasterIntakeLotId: String
            roasterIntakeNodeId: String

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

            numberOfBags: String
            damage: String
            transferDate: String
            receivedDate: String

        }

        input RoasterIntakeLotInput {

            exporterIntakeNode: RoasterIntakeNodeInput

            roasterIntakeLotId: String
            roasterIntakeNodeId: String

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

            numberOfBags: String
            damage: String
            transferDate: String
            receivedDate: String

        }

        type RoastingNode {

            _id: ID!

            roastingNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            roastingLots: [RoastingLot]

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

            address: String

        }

        input RoastingNodeInput {

            roastingNodeId: String!

            totaAbsorbedWeight: String
            totalAbsorbedWeightUnit: String

            roastingLots: [RoastingLotInput]

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

            value: String
            valueUnit: String
            unitValue: String
            unitValueUnit: String

            locationId: String
            name: String
            country: String
            city: String
            state: String
            latitude: String
            longitude: String
            elevation: String
            elevationUnit: String

            address: String

        }

        type RoastingLot {

            _id: ID!

            roastingNode: RoastingNode

            roastingLotId: String
            roastingNodeId: String

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

            actor: String
            roastDate: String
            notes: String

        }

        input RoastingLotInput {

            roastingNode: RoastingNodeInput

            roastingLotId: String
            roastingNodeId: String

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

            actor: String
            roastDate: String
            notes: String

        }

        type Farmer {

            _id: ID!

            farmerName: String!
            producerName: String

            harvestNode: HarvestNode            
            wetMillNode: WetMillNode
            exporterIntakeNode: ExporterIntakeNode
            dryMillNode: DryMillNode
            exportNode: ExportNode
            importNode: ImportNode
            roasterIntakeNode: RoasterIntakeNode

            roastingNode: RoastingNode

        }

        input FarmerInput {

            farmerName: String!
            producerName: String

            harvestNode: HarvestNodeInput
            wetMillNode: WetMillNodeInput
            exporterIntakeNode: ExporterIntakeNodeInput
            dryMillNode: DryMillNodeInput
            exportNode: ExportNodeInput
            importNode: ImportNodeInput
            roasterIntakeNode: RoasterIntakeNodeInput

            roastingNode: RoastingNodeInput

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

            createExportNode(exportNodeInput: ExportNodeInput): ExportNode
            createExportLot(exportLotInput: ExportLotInput): ExportLot
            
            createImportNode(importNodeInput: ImportNodeInput): ImportNode
            createImportLot(importLotInput: ImportLotInput): ImportLot

            createRoasterIntakeNode(roasterIntakeNodeInput: RoasterIntakeNodeInput): RoasterIntakeNode
            createRoasterIntakeLot(roasterIntakeLotInput: RoasterIntakeLotInput): RoasterIntakeLot

            createRoastingNode(roastingNodeInput: RoastingNodeInput): RoastingNode
            createRoastingLot(roastingLotInput: RoastingLotInput): RoastingLot

        }

        schema {

            query: RootQuery
            mutation: RootMutation

        }

    `);