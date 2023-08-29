import { Layout, Dropdown, Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React from "react";

const { Header } = Layout;

const AdminNavbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");
  const decode = jwt_decode(token)

  const email = decode.access_token.email;

  const clearToken = () => {
    localStorage.clear();
    navigate("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={clearToken}>
        <p className="text-[#EA5455] text-center font-bold">Logout</p>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <>
      <Header className="bg-white h-62 ml-[30px] flex items-center justify-end rounded shadow-xl">
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="text" className="text-sm text-[#696974]">{email}</Button>
        </Dropdown>
      </Header>
    </>
  );
};

export default AdminNavbar;
