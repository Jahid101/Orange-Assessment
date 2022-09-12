import MenuComponent from "@Components/MenuComponent";
import MobileDrawer from "@Components/MobileDrawer";
import MyProfile from "@Components/MyProfile";
import AppLayout from "@layout/layout";
import { Col, Empty, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Layout className="not-collapsed">
        <MenuComponent defaultSelectedKeys={"5"} />
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
              ></MobileDrawer>

              <Col span={21} className="text-right">
                <MyProfile></MyProfile>
              </Col>
            </Row>
          </Header>

          <Content className="uniPadding">
            <div className="name capitalize mb-30">Buy Credits</div>
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
