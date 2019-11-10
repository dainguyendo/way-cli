import { Language, TravelMode, UnitSystem } from '@google/maps';

export interface WayCLIUserConfiguration {
  language: Language;
  mode: TravelMode;
  units: UnitSystem;
}
