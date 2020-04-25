import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { LoadingComponent } from "./style";

import Loader from "../../assets/loader.svg";

import { RxStatusLoginSession } from "../Login/type";
import { RxStatusAccount } from "../Account/type";

interface State {
  loading: boolean;
}

const mapState = (state: RxStatusLoginSession & RxStatusAccount): State => {
  return {
    loading: state.AccountReducer.loading || state.LoginReducer.loading,
  };
};

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

const Loading: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      {props.loading ? (
        <LoadingComponent>
          <img src={Loader} alt="" />
        </LoadingComponent>
      ) : null}
    </>
  );
};

export default connector(Loading);
