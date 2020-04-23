export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface StateModel {
  item: number;
}

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export interface RedStateModel {
  number: StateModel;
}

export type TypeAction = IncrementAction | DecrementAction;
