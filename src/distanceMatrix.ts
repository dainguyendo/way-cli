import { prompt, Answers } from 'inquirer';
import distanceMatrixPrompt from './prompts/distanceMatrix';
import { getConfiguration } from './configure';
import { initializeGoogleClient } from './googlemaps';
import * as log from './log';
import { DistanceMatrixRow, DistanceMatrixRequest } from '@google/maps';
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

async function requestDistanceMatrix(args: Answers) {
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
  }
}

export async function distanceMatrixCommand() {
  try {
    const args = await prompt(distanceMatrixPrompt);
    const response = await requestDistanceMatrix(args);
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

    // TODO Type definitions has a bug - make contribution PR when possible
    const origins = (origin_addresses as any) as string[];

    const formattedMatrix = formatResponseDistanceMatrix(
      origins,
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
  } catch (error) {
    log.error(error);
  }
}
