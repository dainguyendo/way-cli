const file = require('../file');

module.exports = () => {
    const aliases = file.checkAliases();
    console.log(aliases);
}