#!/usr/bin/env node

const config = require('./config');
require('dotenv').config({
    path: config.envFilePath
});
const program = require('commander');
const inquirer = require('inquirer');

const handleDistanceCommand = require('./commander/command.distance');
const handleSaveCommand = require('./commander/command.save');
const handleDeleteCommand = require('./commander/command.delete');
const handleListCommand = require('./commander/command.list');
const handleDirectionCommand = require('./commander/command.directions');

const promptTime = require('./inquirer/inquirer.distance');
const promptSave = require('./inquirer/inquirer.save');
const promptDirection = require('./inquirer/inquirer.directions');

program
    .version('1.0.0', '-v, --version')
    .option('-m, --mode <mode>', 'Mode of transportation preference. Options: driving, walking, biycling, or transit (directions command only)', 'driving')
    .option('-u, --unit <unit>', 'Return results in either metric or imperial units', 'metric')
    .option('-a, --avoid <avoid>', 'Avoidance preferences. Options: tolls, highways, ferries, indoor', null)
    .option('-i, --interactive', 'Performs command as interactive interface');

program
    .command('save [place] [alias]')
    .alias('s')
    .description('Save a location as an alias for optional <origins> or <destinations> arguements. If the alias already exists the aliases will be updated.')
    .action((place, alias) => {
        if (program.interactive) {
            inquirer.prompt(promptSave).then(inputs => {
                handleSaveCommand(inputs.place, inputs.alias)
            });
        } else {
            handleSaveCommand(place, alias);
        }
    });

program
    .command('delete [alias]')
    .alias('del')
    .description('Remove an alias.')
    .action(alias => handleDeleteCommand(alias));

program
    .command('list')
    .alias('l')
    .description('List all saved aliases.')
    .action(handleListCommand);

program
    .command('distance [origins] [destinations]')
    .alias('dist')
    .description('Creates a distance matrix between <origins> and <destinations>')
    .action((origins, destinations) => {
        if (program.interactive) {
            inquirer.prompt(promptTime).then(inputs => {
                const interactiveProgram = {
                    mode: inputs.mode,
                    unit: inputs.unit,
                    avoid: inputs.avoid
                };
                handleDistanceCommand(interactiveProgram, inputs.origins, inputs.destinations);
            });
        } else {
            handleDistanceCommand(program, origins, destinations);
        }
    });

program
    .command('directions [origin] [destination]')
    .alias('dir')
    .description('Outputs a Google Maps direction URL for copy/pasta ease')
    .action((origin, destination) => {
        if (program.interactive) {
            inquirer.prompt(promptDirection).then(inputs => {
                const interactiveProgram = {
                    mode: inputs.mode
                };
                handleDirectionCommand(interactiveProgram, inputs.origin, inputs.destination);
            })
        } else {
            handleDirectionCommand(program, origin, destination);
        }
    });

program.parse(process.argv);