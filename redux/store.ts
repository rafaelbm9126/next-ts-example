import { combineReducers } from "redux";
import NumberReducer from "./reducer";

const rootReducer = combineReducers({
  number: NumberReducer,
});

export default rootReducer;
