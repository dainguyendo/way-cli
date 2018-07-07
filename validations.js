const _ = require('lodash');
const config = require('./config');

const validateString = (string) => {
    return _.isEmpty(string) ? false : true;
}

const validateDistanceMode = mode => config.distanceModes.includes(mode.toLowerCase());
const validateDirectionMode = mode => config.directionModes.includes(mode.toLowerCase());

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
    validateDirectionMode,
    validateDistanceMode,
    validateAvoids,
    validateUnits
}

