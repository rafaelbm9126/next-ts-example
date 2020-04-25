import {
  SUBMIT_FORM_LOGIN,
  ActionLoginSession,
  SUCCESS_SESSION,
  SuccessSession,
  FormLogIn,
  FAIL_SESSION,
  LOGOUT_SESSION,
} from "./type";
import { LoginService, AuthSession, LogOutSession } from "./service";
import { setSession, getSession, delSession } from "./storage";

export type dispatchLogin = (_: ActionLoginSession) => void;

export const isActiveSession = () => {
  return (dispatch: dispatchLogin) => {
    const token = getSession();
    if (typeof token === "string") {
      AuthSession(token).then((data) => {
        data.token = token;
        dispatch(successLogin(data));
      });
    }
  };
};

export const submitFormLogin = (form: FormLogIn) => {
  return (dispatch: dispatchLogin) => {
    LoginService(form)
      .then((data) => {
        dispatch(successLogin(data));
        setSession(data.token);
      })
      .catch(() => {
        dispatch(failLogin());
      });
    dispatch(submitLogin());
  };
};

export const logoutSession = (token: string) => {
  return (dispatch: dispatchLogin) => {
    LogOutSession(token).then(() => {
      delSession();
      dispatch(logOut());
    });
  };
};

const submitLogin = (): ActionLoginSession => ({
  type: SUBMIT_FORM_LOGIN,
  loading: true,
});

const successLogin = (payload: SuccessSession): ActionLoginSession => ({
  type: SUCCESS_SESSION,
  payload: { ...payload },
  loading: false,
});

const failLogin = (): ActionLoginSession => ({
  type: FAIL_SESSION,
  payload: { fail: true },
  loading: false,
});

const logOut = (): ActionLoginSession => ({
  type: LOGOUT_SESSION,
});
