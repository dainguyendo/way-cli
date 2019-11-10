import { DirectionsResponse } from '@google/maps';
import * as log from './log';
import { getUserConfiguration } from './handlers/handleConfigurePrompt';
import { initializeGoogleClient } from './googlemaps';
import { Answers, prompt } from 'inquirer';
import directionsPrompt from './prompts/directions';
import * as qs from 'query-string';
import open from 'open';

async function requestDirections(args: Answers) {
  try {
    const { origin, destination } = args;
    const { language, mode, units } = await getUserConfiguration();
    const client = initializeGoogleClient();
    const response = await client
      .directions({ origin, destination, language, mode, units })
      .asPromise();
    return response;
  } catch (error) {
    log.error(error);
  }
}

async function generateGoogleMapsLink(
  json: DirectionsResponse,
  args: Answers
): Promise<string> {
  const base = 'https://www.google.com/maps/dir/?api=1';
  const { geocoded_waypoints } = json;
  const { origin, destination } = args;
  const [originWaypoint, destinationWaypoint] = geocoded_waypoints;
  const { mode } = await getUserConfiguration();

  const parameters = {
    origin,
    destination,
    origin_place_id: originWaypoint.place_id,
    destination_place_id: destinationWaypoint.place_id,
    travel_mode: mode
  };

  return `${base}&${qs.stringify(parameters)}`;
}

export async function directionsCommand() {
  const args = await prompt(directionsPrompt);
  const response = await requestDirections(args);
  const { json } = response;
  const url = await generateGoogleMapsLink(json, args);
  log.ok(url);
  await open(url);
}
