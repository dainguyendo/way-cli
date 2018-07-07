const fs = require('fs');
const config = require('./config');

const checkExistence = path => fs.existsSync(path);

const checkAliases = () => {
    const exist = checkExistence(config.aliasesFilePath);
    if (exist) {
        const aliases = require(config.aliasesFilePath);
        return aliases;
    } else {
        return {};
    }
}

const write = (file, data, options) => fs.writeFileSync(file, data, options);

module.exports = {
    checkAliases,
    checkExistence,
    write
};