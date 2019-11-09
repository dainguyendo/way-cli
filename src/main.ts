import * as path from 'path';
import * as dotenv from 'dotenv';
import program from 'commander';
import inquirer from 'inquirer';
import { version } from '../package.json';

import distanceMatrixQuestions from './prompts/distanceMatrix';
import configureQuestions from './prompts/configure';
import { getDistanceMatrix, getDirections } from './googlemaps';
import { handleConfigurePrompt } from './handlers/handleConfigurePrompt';
import { formatDistanceMatrix } from './formats/distanceMatrix.js';

dotenv.config();

program.version(version, '-v, --version');

program
  .command('configure')
  .alias('config')
  .description('Set up common configurations for way-cli')
  .action(async () => {
    const inputs = await inquirer.prompt(configureQuestions);
    handleConfigurePrompt(inputs);
  });

program
  .command('distance')
  .alias('dist')
  .description('Creates a distance matrix between <origins> and <destinations>')
  .action(async () => {
    const inputs = await inquirer.prompt(distanceMatrixQuestions);
    const clientResponse = await getDistanceMatrix(inputs);
    if (clientResponse) {
      const matrix = clientResponse.json;
      formatDistanceMatrix(matrix);
    }
  });

program
  .command('directions')
  .alias('dir')
  .description('Get directions from <origin> to <destination>')
  .action(async () => {
    // const inputs = await inquirer.prompt(directionQuestions);
    // getDirections(inputs);
  });

program.parse(process.argv);