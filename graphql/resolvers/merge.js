// Importing Mongoose Models
const HarvestNode = require('../../models/harvestNode');
const WetMillNode = require('../../models/wetMillNode');

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

// Function that links Farmer with Wet Mill Node
const fetchWetMillNode = wetMillNodeId => {

    return WetMillNode.findById(wetMillNodeId)
        .then(wetMillNode => {

            return {
                ...wetMillNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

exports.fetchHarvestNode = fetchHarvestNode;
exports.fetchWetMillNode = fetchWetMillNode;