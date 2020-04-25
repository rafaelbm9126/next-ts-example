import { combineReducers } from "redux";
import { LoginReducer } from "../components/Login";
import { AccountReducer } from "../components/Account";

const rootReducer = combineReducers({
  LoginReducer,
  AccountReducer,
});

export default rootReducer;
