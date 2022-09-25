import MenuComponent from "@Components/MenuComponent";
import MyProfile from "@Components/MyProfile";
import AppLayout from "@layout/layout";
import { Col, Empty, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
require("./index.less");

const index = () => {
  let arr: any = [1,2,3,4];
  let abc = arr.map((item: any) => +item % 2 == 0);
  console.log(abc);
  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultSelectedKeys={"1"} />
        <Layout className="site-layout">
          <Header className="headerTop">
            <Row className="height-100">
              <Col span={15}></Col>

              <Col span={9} className="text-right">
                <MyProfile></MyProfile>
              </Col>
            </Row>
          </Header>

          <Content
            className="uniPadding"
            // style={{ margin: "10px", minHeight: "100vh" }}
          >
            <div className="name capitalize mb-30">Dashboard</div>
            <div className="mt-50">
              <Empty />
              {}
            </div>
          </Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
