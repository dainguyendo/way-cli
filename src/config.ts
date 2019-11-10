import * as path from 'path';
import { WayCLIUserConfiguration } from './types';

export const USER_CONFIG_PATH = path.join(__dirname, 'userConfig.json');

export const DEFAULT_USER_CONFIG: WayCLIUserConfiguration = {
  language: 'en',
  mode: 'driving',
  units: 'metric'
};
