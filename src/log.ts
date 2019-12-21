import chalk from 'chalk';
import Table from 'cli-table';

const log = console.log;

export const error = (message: any) =>
  log(chalk.red.underline('Error'), message);
export const info = (message: any) =>
  log(chalk.cyan.underline('Info'), message);
export const ok = (message: any) => log(chalk.green.underline('OK'), message);
export const table = (headers: string[], rows: string[][]) => {
  const cliTable = new Table({ head: headers });
  cliTable.push(...rows);
  log(cliTable.toString());
};
