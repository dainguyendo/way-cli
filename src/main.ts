import program from 'commander';
import * as dotenv from 'dotenv';
import { configureCommand } from './configure';
import { directionsCommand } from './directions';
import { distanceMatrixCommand } from './distanceMatrix';

dotenv.config();

program.version('2.0.0', '-v, --version');

program
  .command('configure')
  .alias('config')
  .description('Set up common configurations for way-cli')
  .action(async () => configureCommand());

program
  .command('distance')
  .alias('dist')
  .description('Creates a distance matrix between <origins> and <destinations>')
  .action(() => distanceMatrixCommand());

program
  .command('directions')
  .alias('dir')
  .description('Get directions from <origin> to <destination>')
  .action(() => directionsCommand());

program.parse(process.argv);
