import { State } from './State';

export interface Locale extends State {
  currentState?: State;
  states?: State[];
  citys?: { id: number; nome: string }[];
}
