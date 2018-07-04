const _ = require('lodash');

const validateString = (string) => {
    return _.isEmpty(string) ? false : true;
}

const validateMode = mode => {
    const modes = [ 'driving', 'walking', 'bicycling' ];
    return modes.includes(mode.toLowerCase());
}

const validateAvoids = avoid => {
    const avoids = ['tolls', 'highways', 'ferries', 'indoor'];
    if (_.isEmpty(avoid)) {
        return true;
    } else {
        return avoids.includes(avoid.toLowerCase());
    }
}

const validateUnits = unit => {
    const units = [ 'metric', 'imperial' ];
    return units.includes(unit.toLowerCase());
}

module.exports = {
    validateString,
    validateMode,
    validateAvoids,
    validateUnits
}

