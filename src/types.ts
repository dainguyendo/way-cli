import { Language, TravelMode, UnitSystem } from '@google/maps';

export interface WayCLIUserConfiguration {
  language: Language;
  mode: TravelMode;
  units: UnitSystem;
}

export interface WayCLIDistanceMatrixResult {
  error?: boolean;
  origin?: string;
  destination?: string;
  duration?: string;
  durationInTraffic?: string;
  distance?: string;
  fare?: string;
}
