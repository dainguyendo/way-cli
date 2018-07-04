const handleDistanceMatrixAPI = require('./api/distanceMatrix/handler');
const handleGetAliasAPI = require('./api/aliases/get');

module.exports = {
    distanceMatrix: handleDistanceMatrixAPI,
    getAlias: handleGetAliasAPI
};
