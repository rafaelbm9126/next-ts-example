import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "antd";

import LayoutGeneric from "../layout/generic";

import { NameClient } from "./style";

import {
  logoutSession,
  RxStatusLoginSession,
  SuccessSession,
  isActiveSession,
} from "../components/Login";

const mapDispatch = (dispatch: Function) => {
  return {
    Logout: (token: string) => {
      dispatch(logoutSession(token));
    },
    isActive: () => {
      dispatch(isActiveSession());
    },
  };
};

const mapState = (state: RxStatusLoginSession): SuccessSession => {
  return {
    ...state.LoginReducer,
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Home: React.FunctionComponent<Props> = (props) => {
  // persistence session
  React.useEffect(() => {
    props.isActive();
  }, []);

  return (
    <LayoutGeneric>
      {props.token == null ? (
        <>
          <h1>Welcome to Sheldon Company.!</h1>
        </>
      ) : (
        <>
          <h1>
            Hi, dear <NameClient>{props.name}</NameClient>
          </h1>
          <Button onClick={() => props.Logout(props.token || "")}>
            LogOut
          </Button>
        </>
      )}
    </LayoutGeneric>
  );
};

export default connector(Home);
