import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Form, Input, Button, Result } from "antd";

import { RxStatusAccount, StatusAccount } from "../../type";
import { submitFormRecover } from "../../action";

const mapState = (state: RxStatusAccount): StatusAccount => {
  return {
    loading: state.AccountReducer.loading,
    done: state.AccountReducer.done,
    fail: state.AccountReducer.fail,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    recover: (email: string) => {
      dispatch(submitFormRecover(email));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Recover: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="content-form-login">
      <h1>Register Sheldon Contacts</h1>
      {props.fail ? (
        <small className="error-login">Recover Password Error</small>
      ) : null}
      {!props.done ? (
        <Form onFinish={(values) => props.recover(values.recoverEmail)}>
          <Form.Item
            name="recoverEmail"
            className="item-component"
            rules={[{ required: true, type: "email" }]}
            label="Recover with Email"
          >
            <Input placeholder="your_email@example.com" />
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
          title="Successfully Recover!"
          subTitle="Check your email and follow the steps"
        />
      )}
    </div>
  );
};

export default connector(Recover);
