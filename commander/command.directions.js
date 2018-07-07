const api = require('../api');

module.exports = (program, origin, destination) => {
    const { mode } = program;
    api.directions(origin, destination, mode);
}