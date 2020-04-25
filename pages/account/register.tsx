import React from "react";

import LayoutGeneric from "../../layout/generic";
import { Register } from "../../components/Account";

const RegisterPage: React.FunctionComponent<{}> = () => {
  return (
    <LayoutGeneric>
      <Register />
    </LayoutGeneric>
  );
};

export default RegisterPage;
