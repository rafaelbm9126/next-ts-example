import { AxiosResponse } from "axios";
import { SuccessSession, AttributeResponse } from "./type";

export const successLoginHidrate = (
  response: AxiosResponse<AttributeResponse>
): SuccessSession => {
  const {
    data: { data },
  } = response;
  return {
    id: data.id,
    email: data.email,
    phone: data.phone,
    valid: data.valid,
    authAdmin: data.auth_admin,
    created: data.created,
    token: data.token,
    name: data.name,
    domain: data.domain,
    privileges: data.privileges,
    company: data.company,
  };
};
