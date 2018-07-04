#!/usr/bin/env node

require('dotenv').config();
const program = require('commander');
const inquirer = require('inquirer');

const handleDistanceCommand = require('./commander/command.distance');
const handleSaveCommand = require('./commander/command.save');
const handleListCommand = require('./commander/command.list');

const promptTime = require('./inquirer/inquirer.distance');
const promptSave = require('./inquirer/inquirer.save');

program
    .version('1.0.0', '-v, --version')
    .option('-m, --mode <mode>', 'Preferred mode of transportation. Options are [bicycling, driving, walking]', 'driving')
    .option('-u, --unit <unit>', 'Return results in either metric or imperial units', 'metric')
    .option('-a, --avoid <avoid>', 'Avoid certain experiences. Options are [tolls, highways, ferries, indoor]', null)
    .option('-i, --interactive', 'Performs command as interactive interface');

program
    .command('save [place] [alias]')
    .alias('s')
    .description('Save a location as an alias for optional <origins> or <destinations> arguements')
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
    .command('list')
    .alias('l')
    .description('List all saved aliases.')
    .action(handleListCommand);

program
    .command('distance [origins] [destinations]')
    .option('-m, --mode <mode>', 'Preferred mode of transportation. Options are [bicycling, driving (default), walking]')
    .alias('t')
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

program.parse(process.argv);