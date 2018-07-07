const validations = require('../validations');
const config = require('../config');

module.exports = [
    {
        type: 'input',
        name: 'origins',
        message: 'Specified origin(s). For multiple origins seperate via "|". Example: "Origin A | Origin B"',
        default: '',
        validate: (input) => validations.validateString(input)
    },
    {
        type: 'input',
        name: 'destinations',
        message: 'Specified destination(s). For multiple destinations seperate via "|". Example: "Destination A | Destination B"',
        default: '',
        validate: (input) => validations.validateString(input)
    },
    {
        type: 'list',
        name: 'mode',
        message: 'Specified mode of transportation?',
        choices: config.distanceModes,
        default: 'driving',
        validate: (input) => validations.validateDistanceMode(input)
    },
    {
        type: 'list',
        name: 'unit',
        message: 'Specified type of measurement?',
        choices: config.units,
        default: 'metric',
        validate: (input) => validations.validateUnits(input)
    },
    {
        type: 'list',
        name: 'avoid',
        message: 'Avoid certain obstacles',
        choices: [
            'none',
            'tolls',
            'highways',
            'ferries',
            'indoor'
        ],
        filter: function (input) {
            return input === 'none' ? null : input;
        },
        validate: (input) => validations.validateAvoids(input),
        default: null
    }
];
