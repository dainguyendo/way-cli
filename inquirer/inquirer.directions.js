const validations = require('../validations');
const config = require('../config');

module.exports = [
    {
        type: 'input',
        name: 'origin',
        message: 'Specified starting origin',
        default: '',
        validate: (input) => validations.validateString(input)
    },
    {
        type: 'input',
        name: 'destination',
        message: 'Specified ending destination',
        default: '',
        validate: (input) => validations.validateString(input)
    },
    {
        type: 'list',
        name: 'mode',
        message: 'Specified mode of transportation?',
        choices: config.directionModes,
        default: 'driving',
        validate: (input) => validations.validateDirectionMode(input)
    }
]