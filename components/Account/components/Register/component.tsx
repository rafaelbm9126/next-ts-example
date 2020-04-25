import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Form, Input, Button, Result } from "antd";

import { RxStatusAccount, StatusAccount, RegisterUser } from "../../type";
import { submitFormRegister } from "../../action";

const mapState = (state: RxStatusAccount): StatusAccount => {
  return {
    loading: state.AccountReducer.loading,
    done: state.AccountReducer.done,
    fail: state.AccountReducer.fail,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    register: (form: RegisterUser) => {
      dispatch(submitFormRegister(form));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Register: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="content-form-login">
      <h1>Register Sheldon Contacts</h1>
      {props.fail ? (
        <small className="error-login">Register Error</small>
      ) : null}
      {!props.done ? (
        <Form onFinish={(values) => props.register(values as RegisterUser)}>
          <Form.Item
            name="name"
            className="item-component"
            rules={[{ required: true }]}
            label="Name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            className="item-component"
            rules={[{ required: true, type: "email" }]}
            label="Email"
          >
            <Input placeholder="your_email@example.com" />
          </Form.Item>
          <Form.Item
            name="phone"
            className="item-component"
            rules={[{ required: true }]}
            label="Phone"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="company"
            className="item-component"
            rules={[{ required: true }]}
            label="Company"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
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
      ) : (
        <Result
          status="success"
          title="Successfully Register!"
          subTitle="Check your email and validate the account"
        />
      )}
    </div>
  );
};

export default connector(Register);
