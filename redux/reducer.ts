import { INCREMENT, DECREMENT, StateModel, TypeAction } from "./type";

const initialState: StateModel = {
  item: 0,
};

const NumberReducer = (
  state: StateModel = initialState,
  action: TypeAction
): StateModel => {
  switch (action.type) {
    case INCREMENT:
      return { item: state.item + 1 };
    case DECREMENT:
      return { item: state.item - 1 };
    default:
      return state;
  }
};

export default NumberReducer;
