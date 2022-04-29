import { State } from './State';
import { City } from './City';

export interface Locale {
  selectedState?: number;
  selectedCity?: number;
  states?: State[];
  citys?: City[];
  isFetching?: boolean;
  error: Error | null;
}
