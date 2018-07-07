const handleDistanceMatrixAPI = require('./api/distanceMatrix/handler');
const handleDirectionsAPI = require('./api/directions/handler');
const handleGetAliasAPI = require('./api/aliases/get');

module.exports = {
    distanceMatrix: handleDistanceMatrixAPI,
    directions: handleDirectionsAPI,
    getAlias: handleGetAliasAPI
};
