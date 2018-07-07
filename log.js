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

const _createTable = (headers, rows) => {
    const table = new Table({ head: headers });
    table.push(...rows);
    return table;
}

const error = message => log(red.underline('Error'), message);
const info = message => log(cyan.underline('Info'), message);
const table = (headers, rows) => {
    const t = _createTable(headers, rows);
    log(t.toString());
};
const url = link => log(green.italic.underline.bold(link));

module.exports = {
    error,
    info,
    table,
    url
};