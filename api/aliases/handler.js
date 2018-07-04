const aliases = require('../../aliases.json');

const get = alias => aliases.hasOwnProperty(alias) ? aliases[alias] : alias;

module.exports = {
    get
};
