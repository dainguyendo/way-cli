const file = require('../file');
const config = require('../config');

module.exports = (place, alias) => {
    const aliases = file.checkAliases();
    const exists = aliases.hasOwnProperty(alias);
    if (exists) {
        console.log('Alias exists, updating...');
    } else {
        console.log('Saving new alias');
    }
    aliases[alias] = place;
    const newAliases = Object.assign({}, aliases);
    const json = JSON.stringify(newAliases);
    file.write(config.aliasesFilePath, json, 'utf8');
    console.log('Aliases updated');
}