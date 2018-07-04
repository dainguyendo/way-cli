const chalk = require('chalk');
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


module.exports = {
    error,
    info
};