import fs from 'fs';
import Inquirer from 'inquirer';
import * as path from 'path';
import * as log from './log';
import configureQuestions from './prompts/configure';
import { WayCLIUserConfiguration } from './types';

const USER_CONFIG_PATH = path.join(__dirname, 'userConfig.json');
const DEFAULT_USER_CONFIGURATION: WayCLIUserConfiguration = {
  language: 'en',
  mode: 'driving',
  units: 'metric'
};

function saveConfiguration(config: Partial<WayCLIUserConfiguration>) {
  checkConfigurationFile();
  const json = require(USER_CONFIG_PATH);
  const newJson: WayCLIUserConfiguration = Object.assign(
    {},
    { ...json, ...config }
  );
  fs.writeFileSync(USER_CONFIG_PATH, JSON.stringify(newJson, null, 2), 'utf8');
}

function checkConfigurationFile() {
  const doesFileExist = fs.existsSync(USER_CONFIG_PATH);
  if (!doesFileExist) {
    log.info('Initializing default user configuration');
    fs.writeFileSync(
      USER_CONFIG_PATH,
      JSON.stringify({ ...DEFAULT_USER_CONFIGURATION }, null, 2),
      'utf8'
    );
  }
}

export async function getConfiguration(): Promise<WayCLIUserConfiguration> {
  checkConfigurationFile();
  const config = require(USER_CONFIG_PATH);
  log.ok(config);
  return config;
}

export const configureCommand = async () => {
  const inputs = await Inquirer.prompt(configureQuestions);
  saveConfiguration(inputs);
  await getConfiguration();
};
