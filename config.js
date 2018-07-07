const path = require('path');

const aliasesFilePath = path.join(__dirname, 'aliases.json');
const envFilePath = path.join(__dirname, '.env');

module.exports = {
    aliasesFilePath,
    envFilePath
};


