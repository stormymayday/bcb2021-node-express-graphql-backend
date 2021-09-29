// Importing Mongoose Models
const HarvestNode = require('../../models/harvestNode');
const WetMillNode = require('../../models/wetMillNode');
const ExporterIntakeNode = require('../../models/exporterIntakeNode');
const DryMillNode = require('../../models/dryMillNode');
const ExportNode = require('../../models/exportNode');
const ImportNode = require('../../models/importNode');
const RoasterIntakeNode = require('../../models/roasterIntakeNode');

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

// Function that links Farmer with Export Node
const fetchExportNode = _id => {

    return ExportNode.findById(_id).populate('exportLots')
        .then(exportNode => {

            return {
                ...exportNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

// Function that links Farmer with Import Node
const fetchImportNode = _id => {

    return ImportNode.findById(_id).populate('importLots')
        .then(importNode => {

            return {
                ...importNode._doc
            };

        })
        .catch(err => {
            throw err;
        })

};

// Function that links Farmer with Roaster Intake Node
const fetchRoasterIntakeNode = _id => {

    return RoasterIntakeNode.findById(_id).populate('roasterIntakeLots')
        .then(roasterIntakeNode => {

            return {
                ...roasterIntakeNode._doc
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
exports.fetchExportNode = fetchExportNode;
exports.fetchImportNode = fetchImportNode;
exports.fetchRoasterIntakeNode = fetchRoasterIntakeNode;