import * as googleClient from '@google/maps';

export function initializeGoogleClient(): googleClient.GoogleMapsClientWithPromise {
  const client = googleClient.createClient({
    key: process.env.WAY_CLI_API_KEY as string,
    Promise: Promise
  });
  return client;
}

export function isAPIKeyError(error: any): boolean {
  if (
    typeof error === 'string' &&
    error.match(/Missing either a valid API key, or a client ID and secret/)
  ) {
    return true;
  }
  return false;
}
