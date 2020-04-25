import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Form, Input, Button } from "antd";
import Router from "next/router";

import {
  RxStatusLoginSession,
  FormLogIn,
  SuccessSession,
  FailSession,
} from "./type";
import { submitFormLogin } from "./action";

const mapState = (
  state: RxStatusLoginSession
): FormLogIn & FailSession & SuccessSession => {
  return {
    ...state.LoginReducer,
    loginEmail: state.LoginReducer.loginEmail,
    loginPassword: state.LoginReducer.loginPassword,
    loading: state.LoginReducer.loading,
    fail: state.LoginReducer.fail,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    session: ({ loginEmail, loginPassword }: FormLogIn) => {
      dispatch(submitFormLogin({ loginEmail, loginPassword } as FormLogIn));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Login: React.FunctionComponent<Props> = (props: Props) => {
  // when is successful login
  React.useEffect(() => {
    if (props.token !== null) {
      Router.push("/");
    }
  }, [props.token]);

  return (
    <div className="content-form-login">
      <h1>Login Sheldon Contacts</h1>
      {props.fail ? <small className="error-login">Login Error</small> : null}
      <Form onFinish={(values) => props.session(values as FormLogIn)}>
        <Form.Item
          name="loginEmail"
          className="item-component"
          rules={[{ required: true, type: "email" }]}
          label="Email"
        >
          <Input placeholder="your_email@example.com" />
        </Form.Item>
        <Form.Item
          name="loginPassword"
          className="item-component"
          rules={[{ required: true }]}
          label="Password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connector(Login);
