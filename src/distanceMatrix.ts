import { DistanceMatrixRequest, DistanceMatrixRow } from '@google/maps';
import Inquirer from 'inquirer';
import { getConfiguration } from './configure';
import { initializeGoogleClient, isAPIKeyError } from './googlemaps';
import * as log from './log';
import distanceMatrixPrompt from './prompts/distanceMatrix';
import { WayCLIDistanceMatrixResult } from './types';

function formatResponseDistanceMatrix(
  originAddresses: string[],
  destinationAddresses: string[],
  rows: DistanceMatrixRow[]
): WayCLIDistanceMatrixResult[] {
  const results: WayCLIDistanceMatrixResult[] = [];
  rows.forEach((row, rowIndex) => {
    const { elements } = row;
    const originAddress = originAddresses[rowIndex];
    elements.forEach((element, elementIndex) => {
      const destinationAddress = destinationAddresses[elementIndex];
      const { status, duration, duration_in_traffic, distance, fare } = element;
      const result: WayCLIDistanceMatrixResult = {
        origin: originAddress,
        destination: destinationAddress
      };
      if (status === 'OK') {
        results.push(
          Object.assign(result, {
            duration: duration?.text,
            distance: distance?.text,
            durationInTraffic: duration_in_traffic?.text,
            fare: fare?.text
          })
        );
      } else {
        results.push(Object.assign(result, { error: true }));
      }
    });
  });
  return results;
}

async function requestDistanceMatrix(args: Inquirer.Answers) {
  try {
    const { origins, destinations, avoid } = args;
    const userConfigration = await getConfiguration();
    const client = initializeGoogleClient();

    const distanceMatrixRequest: DistanceMatrixRequest = {
      origins,
      destinations,
      ...userConfigration
    };

    if (avoid.length === 0 || !avoid.includes('none')) {
      distanceMatrixRequest.avoid = avoid;
    }

    const response = await client
      .distanceMatrix(distanceMatrixRequest)
      .asPromise();
    return response;
  } catch (error) {
    log.error(error);
    if (isAPIKeyError(error)) {
      log.seeAPIKeySetup();
    }
  }
}

export async function distanceMatrixCommand() {
  try {
    const args = await Inquirer.prompt(distanceMatrixPrompt);
    const response = await requestDistanceMatrix(args);

    if (response) {
      const { json } = response;
      const {
        status,
        error_message,
        origin_addresses,
        destination_addresses,
        rows
      } = json;

      if (status !== 'OK') {
        throw new Error(`${status}: ${error_message}`);
      }

      const formattedMatrix = formatResponseDistanceMatrix(
        origin_addresses,
        destination_addresses,
        rows
      );

      log.table(
        ['Origin', 'Destination', 'Duration', 'Distance', 'Fare'],
        formattedMatrix.map(
          ({ origin, destination, duration, distance, fare }) => [
            origin || '',
            destination || '',
            duration || '',
            distance || '',
            fare || ''
          ]
        )
      );
    }
  } catch (error) {
    log.error(error);
  }
}
