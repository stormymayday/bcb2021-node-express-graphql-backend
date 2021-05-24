// Importing Mongoose Models
const HarvestNode = require('../../models/harvestNode');

// Function that links Farmer with Harvest Node
const fetchHarvestNode = harvestNodeId => {

    return HarvestNode.findById(harvestNodeId).populate('harvestLots')
        .then(harvestNode => {

            return {
                ...harvestNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

// Links to other node types should be here ...

exports.fetchHarvestNode = fetchHarvestNode;