const validations = require('../validations');

module.exports = [
    {
        type: 'input',
        name: 'origins',
        message: 'Specified origin(s). For multiple origins seperate via "|". Example: "Origin A | Origin B"',
        default: '',
        validate: function (input) {
            return validations.validateString(input);
        }
    },
    {
        type: 'input',
        name: 'destinations',
        message: 'Specified destination(s). For multiple destinations seperate via "|". Example: "Destination A | Destination B"',
        default: '',
        validate: function (input) {
            return validations.validateString(input);
        }
    },
    {
        type: 'list',
        name: 'mode',
        message: 'Specified mode of transportation?',
        choices: [
            'driving',
            'walking',
            'bicycling'
        ],
        default: 'driving',
        validate: function (input) {
            return validations.validateMode(input);
        }
    },
    {
        type: 'list',
        name: 'unit',
        message: 'Specified type of measurement?',
        choices: [
            'metric',
            'imperial',
        ],
        default: 'metric',
        validate: function (input) {
            return validations.validateUnits(input);
        }
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
        validate: function (input) {
            return validations.validateAvoids(input);
        },
        default: null
    }
];
