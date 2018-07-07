const validations = require('../../validations');

module.exports = (origins, destinations, mode, unit, avoid) => {
    const errors = [];
    if (origins.map(orig => validations.validateString(orig)).some(orig => !orig)) {errors.push('No origins defined.') }
    if (destinations.map(dest => validations.validateString(dest)).some(dest => !dest)) { errors.push('No destinations defined.') }
    if (!validations.validateDistanceMode(mode)) { errors.push('Invalid mode argument.') }
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