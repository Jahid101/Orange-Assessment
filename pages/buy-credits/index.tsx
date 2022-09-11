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
        <MenuComponent defaultOpenKeys={"1"} defaultSelectedKeys={"5"} />
        <Layout className="site-layout">
          <Header
            className="headerTop"
            
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
            // style={{ margin: "10px", minHeight: "100vh" }}
          >
            <div className="mt-30"><Empty /></div>
          </Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
