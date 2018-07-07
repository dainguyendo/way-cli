const validations = require('../../validations');

module.exports = (origin, destination, mode) => {
    const errors = [];

    if (!validations.validateString(origin)) { errors.push('No origin defined.') }
    if (!validations.validateString(destination)) { errors.push('No destination defined.') }
    if (!validations.validateDirectionMode(mode)) { errors.push('Invalid mode argument.') }

    if (errors.length) {
        return {
            error: true,
            errors
        };
    } else {
        return { origin, destination, mode };
    }
}