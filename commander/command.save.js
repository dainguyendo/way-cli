const fs = require('fs');
const aliases = require('../aliases.json');

module.exports = (place, alias) => {
    const exists = aliases.hasOwnProperty(alias);
    if (exists) {
        console.log('Alias exists, updating...');
    } else {
        console.log('Saving new alias');
    }
    aliases[alias] = place;
    const newAliases = Object.assign({}, aliases);
    const json = JSON.stringify(newAliases);
    fs.writeFile('../../aliases.json', json, 'utf8', (err) => {
        if (err) {
            console.log('Error saving aliases', err);
        } else {
            console.log('Aliases updated');
        }
    });
}