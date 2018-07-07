const file = require('../../file');

module.exports = alias => {
    const aliases = file.checkAliases();
    return aliases.hasOwnProperty(alias) ? aliases[alias] : alias;
}
