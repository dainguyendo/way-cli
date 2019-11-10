import { Answers } from 'inquirer';
import fs from 'fs';
import { USER_CONFIG_PATH, DEFAULT_USER_CONFIG } from '../config';
import { WayCLIUserConfiguration } from '../types';
import * as log from '../log';

export async function handleConfigurePrompt(args: Answers) {
  const { language, mode, units } = args;
  const isExist = fs.existsSync(USER_CONFIG_PATH);
  if (isExist) {
    const json = require(USER_CONFIG_PATH);
    const newUserConfig = Object.assign({}, { ...json, language, mode, units });
    fs.writeFileSync(
      USER_CONFIG_PATH,
      JSON.stringify(newUserConfig, null, 2),
      'utf8'
    );
  } else {
    fs.writeFileSync(
      USER_CONFIG_PATH,
      JSON.stringify({ language, mode, units }, null, 2),
      'utf8'
    );
  }
}

export async function getUserConfiguration(): Promise<WayCLIUserConfiguration> {
  const isExist = fs.existsSync(USER_CONFIG_PATH);
  if (isExist) {
    const config = require(USER_CONFIG_PATH);
    return config;
  } else {
    fs.writeFileSync(
      USER_CONFIG_PATH,
      JSON.stringify({ ...DEFAULT_USER_CONFIG }, null, 2),
      'utf8'
    );

    log.info('User configuration uninitialized, setting default.');

    const config = require(USER_CONFIG_PATH);
    return config;
  }
}
