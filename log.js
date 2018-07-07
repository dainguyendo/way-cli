const chalk = require('chalk');
const Table = require('cli-table');
const log = console.log;

const {
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    gray,
    bgRed,
    bgGreen,
    bgYellow,
    bgBlue,
    bgMagenta,
    bgCyan,
    bgWhite,
    bold,
    dim,
    italic,
    underline,
    inverse,
    strikethrough
} = chalk;

const error = message => log(bgRed.bold(message));
const info = message => log(yellow(message));

const japan = message => log(bgWhite.red(message));

const _createTable = (headers, rows) => {
    const table = new Table({ head: headers });
    table.push(...rows);
    return table;
}

const table = (headers, rows) => {
    const t = _createTable(headers, rows);
    log(t.toString());
}


module.exports = {
    error,
    info,
    table
};