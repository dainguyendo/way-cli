const validate = require('./validate');
const construct = require('./construct');
const parse = require('./parse');
const getAlias = require('../aliases/get');
const fetch = require('../../fetch');
const log = require('../../log');

module.exports = (origins, destinations, mode, unit, avoid) => {
    const args = validate(origins, destinations, mode, unit, avoid);
    const { error, errors } = args;
    if (error) {
        console.log('validation errors...');
    } else {
        origins = origins.map(getAlias);
        destinations = destinations.map(getAlias);
        const url = construct(origins, destinations, mode, unit, avoid);
        fetch(url, { method: 'GET' }).then(response => {
            const parsed = parse(response);
            const { success, status } = parsed;
            if (!success) {
                console.log(status, 'unsuccessful parsing...');    
            } else {
                const { results } = parsed
                const headers = [
                    'Origin',
                    'Destination',
                    'Duration',
                    'Distance'
                ];
                const rows = results.map(i => [i.origin, i.destination, i.duration, i.distance]);
                log.table(headers, rows);
            }
        }).catch(err => {
            console.log('fetch error...', err);
        });
    }
};