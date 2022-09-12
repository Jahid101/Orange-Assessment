import MenuComponent from "@Components/MenuComponent";
import MyProfile from "@Components/MyProfile";
import Profile from "@Components/Profile";
import ProfileSettings from "@Components/ProfileSettings";
import AppLayout from "@layout/layout";
import { Col, Empty, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from "react";
import MobileDrawer from "@Components/MobileDrawer";
require("./index.less");



const index = () => {

  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultSelectedKeys={"7"} />
        <Layout className="site-layout">
          <Header className="headerTop">
            <Row className="height-100">
              <Col span={3} className="hamBtn"><AiOutlineMenu className="forMobile" onClick={() => { setVisible(true) }} /></Col>

              <MobileDrawer visible={visible} setVisible={setVisible}></MobileDrawer>

              <Col span={21}
                className="text-right"
              >
                <MyProfile></MyProfile>
              </Col>
            </Row>
            {/* <div className="headerTop height-100">
              <MyProfile></MyProfile>
            </div> */}
          </Header>

          <Content
            className="uniPadding"
          // style={{ margin: "10px", minHeight: "100vh" }}
          >
            <Profile></Profile>
            <ProfileSettings></ProfileSettings>
          </Content>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default index;
