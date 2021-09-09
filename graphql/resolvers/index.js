// Importing Individual Resolvers
const farmerResolver = require('./farmer');

const harvestNodeResolver = require('./harvestNode');
const harvestLotResolver = require('./harvestLot');

const wetMillNodeResolver = require('./wetMillNode');
const wetMillLotResolver = require('./wetMillLot');

const exporterIntakeNodeResolver = require('./exporterIntakeNode');
const exporterIntakeLotResolver = require('./exporterIntakeLot');

const dryMillNodeResolver = require('./dryMillNode');
const dryMillLotResolver = require('./dryMillLot');

const exportNodeResolver = require('./exportNode');
const exportLotResolver = require('./exportLot');

const importNodeResolver = require('./importNode');
const importLotResolver = require('./importLot');

// Rest of the Individual Resolvers should go here...

// Mergin Individual Resolvers  into one resolver (rootResolver) for export
const rootResolver = {
    ...farmerResolver,
    ...harvestNodeResolver,
    ...harvestLotResolver,
    ...wetMillNodeResolver,
    ...wetMillLotResolver,
    ...exporterIntakeNodeResolver,
    ...exporterIntakeLotResolver,
    ...dryMillNodeResolver,
    ...dryMillLotResolver,
    ...exportNodeResolver,
    ...exportLotResolver,
    ...importNodeResolver,
    ...importLotResolver
    // Add more resolvers here...
};

module.exports = rootResolver;