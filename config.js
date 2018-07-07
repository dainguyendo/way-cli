const path = require('path');

const aliasesFilePath = path.join(__dirname, 'aliases.json');
const envFilePath = path.join(__dirname, '.env');

const directionModes = [
    'driving',
    'walking',
    'bicycling',
    'transit'
];

const distanceModes = [
    'driving',
    'walking',
    'bicycling',
];

const units = [
    'metric',
    'imperial',
]

module.exports = {
    aliasesFilePath,
    envFilePath,
    directionModes,
    distanceModes,
    units
};


