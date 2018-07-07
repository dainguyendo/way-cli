const file = require('../file');
const config = require('../config');
const log = require('../log');

module.exports = (place, alias) => {
    const aliases = file.checkAliases();
    const exists = aliases.hasOwnProperty(alias);
    aliases[alias] = place;
    const newAliases = Object.assign({}, aliases);
    const json = JSON.stringify(newAliases);
    file.write(config.aliasesFilePath, json, 'utf8');

    if (exists) {
        log.info(`Updated alias ${alias}.`);
    } else {
        log.info(`Saved new alias ${alias}.`);
    }
}