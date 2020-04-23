import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StateModel, RedStateModel } from "../redux/type";
import { increment, decrement } from "../redux/action";

const mapState = (state: RedStateModel): StateModel => {
  return {
    item: state.number.item,
  };
};

const mapDispatch = {
  inc: () => increment(),
  dec: () => decrement(),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Home: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h1>Hi, {props.item}</h1>
      <br />
      <button onClick={() => props.inc()}>+</button>
      &nbsp;&nbsp;
      <button onClick={() => props.dec()}>-</button>
    </div>
  );
};

export default connector(Home);
