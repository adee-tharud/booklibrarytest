import React from "react";
import { Layout } from "antd";
import HeaderContent from "../header";

const {Header} = Layout;

const LayoutWrapper = () => {
  return (
    <Layout>
      <Header className="layout-header">
        <HeaderContent />
      </Header>
    </Layout>
  );
};

export default LayoutWrapper;