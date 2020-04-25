import {
  SUBMIT_FORM_LOGIN,
  SUCCESS_SESSION,
  FAIL_SESSION,
  LOGOUT_SESSION,
  ActionLoginSession,
  StatusLoginSession,
} from "./type";

export const initialState = (): StatusLoginSession => ({
  loginEmail: "",
  loginPassword: "",
  id: "",
  email: "",
  phone: "",
  valid: false,
  authAdmin: false,
  created: "",
  token: null,
  name: "",
  domain: "",
  privileges: 0,
  company: "",
  loading: false,
  fail: false,
});

const LoginReducer = (
  state: StatusLoginSession = initialState(),
  action: ActionLoginSession
): StatusLoginSession => {
  switch (action.type) {
    case SUBMIT_FORM_LOGIN:
      return { ...state, loading: action.loading };
    case SUCCESS_SESSION:
      return {
        ...state,
        ...action.payload,
        loading: action.loading,
        loginEmail: "",
        loginPassword: "",
      };
    case FAIL_SESSION:
      return { ...state, ...action.payload, loading: action.loading };
    case LOGOUT_SESSION:
      return { ...initialState() };
    default:
      return state;
  }
};

export default LoginReducer;
