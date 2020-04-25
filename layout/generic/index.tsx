import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import { ContentMain, LogoSheldon } from "./styled";
const { Header, Footer, Content, Sider } = Layout;

const LayoutGeneric: React.FunctionComponent<{}> = (props) => {
  let location = undefined;
  if (typeof window !== "undefined") {
    const pathUrl = window.location.href;
    location = [pathUrl.substr(pathUrl.lastIndexOf("/") + 1)];
  }
  return (
    <Layout>
      <Header>
        <Link href="/">
          <LogoSheldon>Sheldon Contacts</LogoSheldon>
        </Link>
      </Header>

      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={location}>
            <Menu.Item key="login">
              <Link href="/account/login">
                <span>LogIn</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link href="/account/register">
                <span>Register</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="recover">
              <Link href="/account/recover">
                <span>Recover Password</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <ContentMain>{props.children}</ContentMain>
        </Content>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        Sheldon Company ©2020 Created by RBM91
      </Footer>
    </Layout>
  );
};

export default LayoutGeneric;
