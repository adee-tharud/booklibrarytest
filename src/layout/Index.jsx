import React from "react";
import { Layout } from "antd";
import HeaderContent from "../header/Index";
import Books from "../books/Index";

const {Header, Content} = Layout;

const LayoutWrapper = () => {
  return (
    <Layout>
      <Header className="layout-header">
        <HeaderContent />
      </Header>
      <Content className="layout-content">
        <div className="content">
          <Books/>
        </div>
      </Content>

    </Layout>
  );
};

export default LayoutWrapper;