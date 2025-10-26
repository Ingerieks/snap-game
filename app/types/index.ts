export interface ICards {
  image: string;
  suit: string;
  value: string;
  code?: string;
  images?: string[];
}

export enum ESnapType {
  VALUE = "value",
  SUIT = "suit",
}
