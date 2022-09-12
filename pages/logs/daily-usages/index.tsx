import MenuComponent from "@Components/MenuComponent";
import MyProfile from "@Components/MyProfile";
import AppLayout from "@layout/layout";
import { Col, Empty, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
require("./index.less");



const index = () => {
  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultOpenKeys={"4"} defaultSelectedKeys={"43"} />
        <Layout className="site-layout">
          <Header className="headerTop">
            <Row className="height-100">
              <Col span={15}></Col>

              <Col span={9}
                className="text-right"
              >
                <MyProfile></MyProfile>
              </Col>
            </Row>
          </Header>

          <Content
            className="uniPadding"
          // style={{ margin: "10px", minHeight: "100vh" }}
          >
            <div className="name capitalize mb-30">Daily Usages</div>
            <div className="mt-50">
              <Empty />
            </div>
          </Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
