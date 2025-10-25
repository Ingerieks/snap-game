import { ICards } from "./cards";

export interface IUpdatedCard {
  updated: ICards[];
  snapResult: {
    value: boolean;
    suit: boolean;
  };
}
