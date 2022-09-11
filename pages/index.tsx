import Dashboard from "@Components/Dashboard";
import AppLayout from "@layout/layout";
import type { NextPage } from "next";
// import '../styles/globals.less';
require("../styles/globals.less");

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Dashboard></Dashboard>
    </AppLayout>
  );
};

export default Home;
