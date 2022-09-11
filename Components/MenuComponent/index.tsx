import {
  DollarOutlined,
  FundOutlined,
  HddOutlined,
  IdcardOutlined,
  PieChartOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import router from "next/router";
import React from "react";
require("./index.less");

const { SubMenu } = Menu;
const { Sider } = Layout;

const index = (props: any) => {
  return (
    <div className="menu-space-between forPcLeft">
      <Sider
        className={
          props.collapsed ? "ant-layout-sider-light2" : "ant-layout-sider-light"
        }
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        trigger={null}
        theme="light"
      >
        <div>
          <a href="/student/my-lessons/all">
            <div
              onClick={() => {
                router.push("/student/my-lessons/all");
              }}
              className="cursor logo mb-30 text-center"
              style={{ padding: 22 }}
            >
              <img src="/images/siteLogo.svg" className="siteLogo" />
            </div>
          </a>

          <Menu
            theme="light"
            mode="inline"
            defaultOpenKeys={["2"]}
            selectedKeys={[props.defaultSelectedKeys]}
          >
            <Menu.Item key="1" icon={<MdDashboard />} className="mb-20">
              <Link href="/">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MdDashboard />} className="mb-20">
              <Link href="/">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<MdDashboard />} className="mb-20">
              <Link href="/">Dashboard</Link>
            </Menu.Item>

            <SubMenu key="4" icon={<ScheduleOutlined />} title="My Lessons">
              <Menu.Item key="22">
                <Link href="/student/my-lessons/all">All</Link>
              </Menu.Item>
              <Menu.Item key="23">
                <Link href="/student/my-lessons/active">Active</Link>
              </Menu.Item>
              <Menu.Item key="24">
                <Link href="/student/my-lessons/pending">Pending</Link>
              </Menu.Item>
              <Menu.Item key="25">
                <Link href="/student/my-lessons/finished">Finished</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link href="/student/account">Profile</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<DollarOutlined />}>
              <Link href="/student/billing/report">Billing </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </div>
  );
};

export default index;
