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
  RegisterUser,
  ActionAccount,
} from "./type";
import {
  RegisterUserService,
  RecoverService,
  PasswordService,
} from "./service";

export type dispatchRegister = (_: ActionAccount) => void;

/**
 * Register
 * @param form
 */

export const submitFormRegister = (form: RegisterUser) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitRegister());
    RegisterUserService(form)
      .then(() => {
        dispatch(successRegister());
      })
      .catch(() => {
        dispatch(failRegister());
      });
  };
};

const submitRegister = (): ActionAccount => ({
  type: SUBMIT_FORM_REGISTER,
});

const successRegister = (): ActionAccount => ({
  type: SUCCESS_REGISTER,
});

const failRegister = (): ActionAccount => ({
  type: FAIL_REGISTER,
});

/**
 * Recover
 * @param email
 */

export const submitFormRecover = (email: string) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitRecover());
    RecoverService(email)
      .then(() => {
        dispatch(successRecover());
      })
      .catch(() => {
        dispatch(failRecover());
      });
  };
};

const submitRecover = (): ActionAccount => ({
  type: SUBMIT_FORM_RECOVER,
});

const successRecover = (): ActionAccount => ({
  type: SUCCESS_RECOVER,
});

const failRecover = (): ActionAccount => ({
  type: FAIL_RECOVER,
});

/**
 * Update
 * @param token
 * @param password
 */

export const submitFormUpdate = (token: string, password: string) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitUpdate());
    PasswordService(token, password)
      .then(() => {
        dispatch(successUpdate());
      })
      .catch(() => {
        dispatch(failUpdate());
      });
  };
};

const submitUpdate = (): ActionAccount => ({
  type: SUBMIT_FORM_UPDATE,
});

const successUpdate = (): ActionAccount => ({
  type: SUCCESS_UPDATE,
});

const failUpdate = (): ActionAccount => ({
  type: FAIL_UPDATE,
});
