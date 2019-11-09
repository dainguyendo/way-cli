import { DistanceMatrixResponse, DistanceMatrixRow } from '@google/maps';
import * as log from '../log';

interface WayCLIDistanceMatrixResult {
  error?: boolean;
  origin?: string;
  destination?: string;
  duration?: string;
  durationInTraffic?: string;
  distance?: string;
  fare?: string;
}

const format = (
  originAddresses: string[],
  destinationAddresses: string[],
  rows: DistanceMatrixRow[]
): WayCLIDistanceMatrixResult[] => {
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
};

export const formatDistanceMatrix = (response: DistanceMatrixResponse) => {
  const {
    status,
    error_message,
    rows,
    origin_addresses,
    destination_addresses
  } = response;
  if (status !== 'OK') {
    log.error(status);
    log.error(error_message);
    throw new Error(`Distance matrix response error: ${status}`);
  }

  const origins = (origin_addresses as any) as string[];

  const formattedMatrix = format(origins, destination_addresses, rows);

  log.table(
    ['Origin', 'Destination', 'Duration', 'Distance', 'Fare'],
    formattedMatrix.map(({ origin, destination, duration, distance, fare }) => [
      origin || '',
      destination || '',
      duration || '',
      distance || '',
      fare || ''
    ])
  );
};
