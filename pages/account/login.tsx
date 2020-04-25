import React from "react";

import LayoutGeneric from "../../layout/generic";
import Login from "../../components/Login";

const LoginPage: React.FunctionComponent<{}> = () => {
  return (
    <LayoutGeneric>
      <Login />
    </LayoutGeneric>
  );
};

export default LoginPage;
