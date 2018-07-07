const validate = require('./validate');
const construct = require('./construct');
const log = require('../../log');
const getAlias = require('../aliases/get');

module.exports = (origin, destination, mode) => {
    const args = validate(origin, destination, mode);
    const { error, errors } = args;
    
    if (error) {
        log.error('Inputs contain validation errors');
        log.table(['Errors'], errors.map(err => [err]));
    } else {
        origin = getAlias(origin);
        destination = getAlias(destination);
        const url = construct(origin, destination, mode);
        log.info('Directions URL');
        log.url(url);
    }
}