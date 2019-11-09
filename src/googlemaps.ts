import * as googleClient from '@google/maps';
import { Answers } from 'inquirer';
import { getUserConfiguration } from './handlers/handleConfigurePrompt';

function initializeGoogleClient() {
  const client = googleClient.createClient({
    key: process.env.WAY_CLI_API_KEY as string,
    Promise: Promise
  });
  return client;
}

export async function getDistanceMatrix(args: Answers) {
  const { origins, destinations, avoid } = args;
  const { language, mode, units } = await getUserConfiguration();

  try {
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
    console.log('Bad', error);
  }
}

export async function getDirections(args: Answers) {
  const {
    origin,
    destination,
    mode,
    avoid,
    units,
    departure_time,
    arrival_time
  } = args;
  try {
    const client = initializeGoogleClient();
    const directions = await client
      .directions({
        origin,
        destination,
        mode,
        avoid,
        units,
        departure_time,
        arrival_time
      })
      .asPromise();
    return directions;
  } catch (error) {
    console.log('Bad', error);
  }
}
