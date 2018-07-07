const file = require('../file');
const config = require('../config');

module.exports = alias => {
    const aliases = file.checkAliases();
    const exists = aliases.hasOwnProperty(alias);
    if (exists) {
        delete aliases[alias];
        const newAliases = Object.assign({}, aliases);
        const json = JSON.stringify(newAliases);
        file.write(config.aliasesFilePath, json, 'utf8');
        console.log(`Deleted ${alias} alias`);
    } else {
        console.log('Alias not found');
    }
}