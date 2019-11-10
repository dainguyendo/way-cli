import * as googleClient from '@google/maps';
import { Answers } from 'inquirer';
import { getUserConfiguration } from './handlers/handleConfigurePrompt';
import * as log from './log';

function initializeGoogleClient() {
  const client = googleClient.createClient({
    key: process.env.WAY_CLI_API_KEY as string,
    Promise: Promise
  });
  return client;
}

export async function getDistanceMatrix(args: Answers) {
  try {
    const { origins, destinations, avoid } = args;
    const { language, mode, units } = await getUserConfiguration();
    const client = initializeGoogleClient();
    const matrix = await client
      .distanceMatrix({
        origins,
        destinations,
        mode,
        units,
        avoid,
        language
      })
      .asPromise();
    return matrix;
  } catch (error) {
    log.error(error);
  }
}

export async function getDirections(args: Answers) {
  try {
    const {
      origin,
      destination
      // avoid
      // departure_time,
      // arrival_time
    } = args;
    const { language, mode, units } = await getUserConfiguration();
    const client = initializeGoogleClient();
    const directions = await client
      .directions({
        origin,
        destination,
        mode,
        // avoid,
        units,
        // departure_time,
        // arrival_time,
        language
      })
      .asPromise();
    return directions;
  } catch (error) {
    log.error(error);
  }
}
