import { TypeAction, INCREMENT, DECREMENT } from "./type";

export const increment = (): TypeAction => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (): TypeAction => {
  return {
    type: DECREMENT,
  };
};
