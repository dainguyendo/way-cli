const file = require('../file');
const config = require('../config');
const log = require('../log');

module.exports = alias => {
    const aliases = file.checkAliases();
    const exists = aliases.hasOwnProperty(alias);
    if (exists) {
        delete aliases[alias];
        const newAliases = Object.assign({}, aliases);
        const json = JSON.stringify(newAliases);
        file.write(config.aliasesFilePath, json, 'utf8');
        log.info(`Alias ${alias} has been deleted.`)
    } else {
        log.info(`Alias ${alias} was not found.`);
    }
}