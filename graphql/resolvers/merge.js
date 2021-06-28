// Importing Mongoose Models
const HarvestNode = require('../../models/harvestNode');
const WetMillNode = require('../../models/wetMillNode');
const ExporterIntakeNode = require('../../models/exporterIntakeNode');
const DryMillNode = require('../../models/dryMillNode');

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
const fetchWetMillNode = _id => {

    return WetMillNode.findById(_id).populate('wetMillLots')
        .then(wetMillNode => {

            return {
                ...wetMillNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

// Function that links Farmer with Exporter Intake Node
const fetchExporterIntakeNode = _id => {

    return ExporterIntakeNode.findById(_id).populate('exporterIntakeLots')
        .then(exporterIntakeNode => {

            return {
                ...exporterIntakeNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

// Function that links Farmer with Dry Mill Node
const fetchDryMillNode = _id => {

    return DryMillNode.findById(_id).populate('dryMillLots')
        .then(dryMillNode => {

            return {
                ...dryMillNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

exports.fetchHarvestNode = fetchHarvestNode;
exports.fetchWetMillNode = fetchWetMillNode;
exports.fetchExporterIntakeNode = fetchExporterIntakeNode;
exports.fetchDryMillNode = fetchDryMillNode;