import {
  SUBMIT_FORM_REGISTER,
  SUCCESS_REGISTER,
  FAIL_REGISTER,
  SUBMIT_FORM_RECOVER,
  SUCCESS_RECOVER,
  FAIL_RECOVER,
  SUBMIT_FORM_UPDATE,
  SUCCESS_UPDATE,
  FAIL_UPDATE,
  StatusAccount,
  ActionAccount,
} from "./type";

export const initialState = (): StatusAccount => ({
  loading: false,
  done: false,
  fail: false,
});

export const AccountReducer = (
  state: StatusAccount = initialState(),
  action: ActionAccount
): StatusAccount => {
  switch (action.type) {
    case SUBMIT_FORM_UPDATE:
    case SUBMIT_FORM_RECOVER:
    case SUBMIT_FORM_REGISTER:
      return { loading: true, done: false, fail: false };
    case SUCCESS_UPDATE:
    case SUCCESS_RECOVER:
    case SUCCESS_REGISTER:
      return { loading: false, done: true, fail: false };
    case FAIL_UPDATE:
    case FAIL_RECOVER:
    case FAIL_REGISTER:
      return { loading: false, done: false, fail: true };
    default:
      return state;
  }
};
