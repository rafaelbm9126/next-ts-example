import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useRouter } from "next/router";
import { Form, Input, Button, Result } from "antd";

import { RxStatusAccount, StatusAccount } from "../../type";
import { submitFormUpdate } from "../../action";

const mapState = (state: RxStatusAccount): StatusAccount => {
  return {
    loading: state.AccountReducer.loading,
    done: state.AccountReducer.done,
    fail: state.AccountReducer.fail,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    update: (token: string, password: string) => {
      dispatch(submitFormUpdate(token, password));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Update: React.FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();
  const token = router.query.token as string;
  return (
    <div className="content-form-login">
      <h1>Register Sheldon Contacts</h1>
      {props.fail ? (
        <small className="error-login">Recover Password Error</small>
      ) : null}
      {!props.done ? (
        <Form onFinish={({ psw }) => props.update(token, psw)}>
          <Form.Item
            name="psw"
            className="item-component"
            rules={[{ required: true }]}
            label="Password"
          >
            <Input.Password disabled={token === undefined} />
          </Form.Item>
          <Form.Item
            name="rPsw"
            className="item-component"
            rules={[{ required: true }]}
            label="Repeat Password"
          >
            <Input.Password disabled={token === undefined} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              disabled={token === undefined}
            >
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

export default connector(Update);
