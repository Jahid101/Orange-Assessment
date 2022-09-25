import MenuComponent from "@Components/MenuComponent";
import MyProfile from "@Components/MyProfile";
import MobileDrawer from "@Components/MobileDrawer";
import AppLayout from "@layout/layout";
import { Col, Empty, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import { useState } from "react";
require("./index.less");

const index = () => {
<<<<<<< HEAD
  let arr: any = [1,2,3,4];
  let abc = arr.map((item: any) => +item % 2 == 0);
  console.log(abc);
=======
  const [visible, setVisible] = useState(false);

>>>>>>> 83de0fd52ded8d38ed944e5bbe5ada7ab6e20811
  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultSelectedKeys={"1"} />
        <Layout className="site-layout">
          <Header className="headerTop">
            <Row className="height-100">
              <Col span={3} className="hamBtn">
                <AiOutlineMenu
                  className="forMobile"
                  onClick={() => {
                    setVisible(true);
                  }}
                />
              </Col>

              <MobileDrawer
                visible={visible}
                setVisible={setVisible}
                defaultSelectedKeys={"1"}
              ></MobileDrawer>

<<<<<<< HEAD
              <Col span={9} className="text-right">
=======
              <Col span={21} className="text-right">
>>>>>>> 83de0fd52ded8d38ed944e5bbe5ada7ab6e20811
                <MyProfile></MyProfile>
              </Col>
            </Row>
          </Header>

          <Content
<<<<<<< HEAD
            className="uniPadding"
            // style={{ margin: "10px", minHeight: "100vh" }}
          >
=======
            className="uniPadding" >
>>>>>>> 83de0fd52ded8d38ed944e5bbe5ada7ab6e20811
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
