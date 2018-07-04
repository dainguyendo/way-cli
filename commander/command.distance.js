const api = require('../api');

module.exports = (program, origins, destinations) => {
    const { mode, unit, avoid } = program;
    const parsedOrigins = origins.split('|');
    const parsedDestinations = destinations.split('|');
    api.distanceMatrix(parsedOrigins, parsedDestinations, mode, unit, avoid);
}