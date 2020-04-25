import axios from "axios";
import { AttributeResponse, FormLogIn, SuccessSession } from "./type";
import { successLoginHidrate } from "./hidrate";

// const API = "http://192.81.211.252:7070";
const API = "http://localhost:7070";

export const LoginService = async (
  form: FormLogIn
): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(`${API}/login_user`, {
    email: form.loginEmail,
    password: form.loginPassword,
  });
  return successLoginHidrate(response);
};

export const AuthSession = async (token: string): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(`${API}/authorization`, {
    token: token,
  });
  return successLoginHidrate(response);
};

export const LogOutSession = async (token: string): Promise<void> => {
  await axios.post<{}>(
    `${API}/logout`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
