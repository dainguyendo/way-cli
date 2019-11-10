import * as googleClient from '@google/maps';

export function initializeGoogleClient() {
  const client = googleClient.createClient({
    key: process.env.WAY_CLI_API_KEY as string,
    Promise: Promise
  });
  return client;
}
