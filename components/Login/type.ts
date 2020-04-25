export const SUBMIT_FORM_LOGIN = "SUBMIT_FORM_LOGIN";
export const LOGOUT_SESSION = "LOGOUT_SESSION";

export interface FormLogIn {
  loginEmail: string;
  loginPassword: string;
  loading: boolean;
}

export const SUCCESS_SESSION = "SUCCESS_SESSION";

export interface SuccessSession {
  id: string;
  email: string;
  phone: string;
  valid: boolean;
  authAdmin: boolean;
  created: string;
  token: string | null;
  name: string;
  domain: string;
  privileges: number;
  company: string;
}

export const FAIL_SESSION = "FAIL_SESSION";

export interface FailSession {
  fail: boolean;
}

interface EventSubmitForm {
  type: typeof SUBMIT_FORM_LOGIN;
  loading: boolean;
}

interface EventSuccessSession {
  type: typeof SUCCESS_SESSION;
  payload: SuccessSession;
  loading: boolean;
}

interface EventFailSession {
  type: typeof FAIL_SESSION;
  payload: FailSession;
  loading: boolean;
}

interface EventLogOutSession {
  type: typeof LOGOUT_SESSION;
}

interface SpecialAttribute {
  auth_admin: boolean;
}

export type AttributeResponse = {
  data: SuccessSession & SpecialAttribute;
};

export type ActionLoginSession =
  | EventSubmitForm
  | EventSuccessSession
  | EventFailSession
  | EventLogOutSession;

export type StatusLoginSession = FormLogIn | SuccessSession | FailSession;

export interface RxStatusLoginSession {
  LoginReducer: FormLogIn & SuccessSession & FailSession;
}
