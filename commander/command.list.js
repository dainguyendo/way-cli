const file = require('../file');
const log = require('../log');

module.exports = () => {
    const aliases = file.checkAliases();
    const headers = ['Alias', 'Value'];
    const rows = Object.entries(aliases);
    log.table(headers, rows);
}