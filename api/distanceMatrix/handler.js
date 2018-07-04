const validate = require('./validate');
const construct = require('./construct');
const parse = require('./parse');
const getAlias = require('../aliases/get');
const fetch = require('../../fetch');

module.exports = (origins, destinations, mode, unit, avoid) => {
    const args = validate(origins, destinations, mode, unit, avoid);
    const { error, errors } = args;
    if (error) {
        console.log('validation errors...');
    } else {
        origins = origins.map(getAlias);
        destinations = destinations.map(getAlias);
        const url = construct(origins, destinations, mode, unit, avoid);
        console.log('url', url);
        fetch(url, { method: 'GET' }).then(response => {
            const parsed = parse(response);
            const { success, status } = parsed;
            if (!success) {
                console.log(status, 'unsuccessful parsing...');    
            } else {
                console.log(parsed);
            }
        }).catch(err => {
            console.log('fetch error...');
        });
    }
};