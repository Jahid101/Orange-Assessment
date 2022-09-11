import MenuComponent from "@Components/MenuComponent";
import MyProfile from "@Components/MyProfile";
import AppLayout from "@layout/layout";
import { Col, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
require("./index.less");

const index = () => {
  return (
    <AppLayout>
      <Layout>
        <MenuComponent defaultOpenKeys={"1"} defaultSelectedKeys={"1"} />
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ background: "white" }}
          >
            <Row>
              <Col span={9}></Col>

              <Col span={15} className="text-right">
                <MyProfile></MyProfile>
              </Col>
            </Row>

          </Header>

          <Content
            className="uniPadding"
            style={{ margin: "10px", minHeight: "100vh" }}
          ></Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
