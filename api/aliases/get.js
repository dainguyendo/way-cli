const aliases = require('../../aliases.json');
module.exports = alias => aliases.hasOwnProperty(alias) ? aliases[alias] : alias;
