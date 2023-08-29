import { Layout } from "antd";
import React from "react";
import AdminSideBar from "./admin-sidebar";
import AdminNavbar from "./admin-navbar";

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Layout>
        <AdminSideBar />
        <Layout>
          <AdminNavbar />
          <Content className="mt-5 ml-[30px] mr-5 rounded mb-10">
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutComponent;
