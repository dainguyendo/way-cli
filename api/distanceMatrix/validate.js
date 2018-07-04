const validations = require('../../validations');

module.exports = (origins, destinations, mode, unit, avoid) => {
    const errors = [];
    if (!validations.validateString(origins)) {errors.push('No origins defined.') }
    if (!validations.validateString(destinations)) { errors.push('No destinations defined.') }
    if (!validations.validateMode(mode)) { errors.push('Invalid mode argument.') }
    if (!validations.validateUnits(unit)) { errors.push('Invalid unit argument.') }
    if (!validations.validateAvoids(avoid)) { errors.push('Invalid avoid argument.') }
    if (errors.length) {
        return {
            error: true,
            errors
        };
    } else {
        return { origins, destinations, mode, unit, avoid };
    }
}