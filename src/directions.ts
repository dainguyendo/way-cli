import { DirectionsResponse } from '@google/maps';
import Inquirer from 'inquirer';
import open from 'open';
import * as qs from 'query-string';
import { getConfiguration } from './configure';
import { initializeGoogleClient, isAPIKeyError } from './googlemaps';
import * as log from './log';
import directionsPrompt from './prompts/directions';
import { WayCLIUserConfiguration } from './types';

async function requestDirections(
  args: Inquirer.Answers,
  configuration: WayCLIUserConfiguration
) {
  try {
    const { origin, destination } = args;
    const { language, mode, units } = configuration;
    const client = initializeGoogleClient();
    const response = await client
      .directions({ origin, destination, language, mode, units })
      .asPromise();
    return response;
  } catch (error) {
    log.error(error);
    if (isAPIKeyError(error)) {
      log.seeAPIKeySetup();
    }
  }
}

async function generateGoogleMapsLink(
  json: DirectionsResponse,
  args: Inquirer.Answers,
  configuration: WayCLIUserConfiguration
): Promise<string> {
  const base = 'https://www.google.com/maps/dir/?api=1';
  const { geocoded_waypoints } = json;
  const { origin, destination } = args;
  const [originWaypoint, destinationWaypoint] = geocoded_waypoints;
  const { mode } = configuration;

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
  const args = await Inquirer.prompt(directionsPrompt);
  const configuration = await getConfiguration();
  const response = await requestDirections(args, configuration);
  if (response) {
    const { json } = response;
    const url = await generateGoogleMapsLink(json, args, configuration);
    log.ok(url);
    await open(url);
  }
}
