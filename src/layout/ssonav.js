import { Layout, Dropdown, Button, Menu } from "antd";
import React from "react";
import IconTitle from "../img/IconTitle.svg";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "../style/Admin.css";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  {
    key: "/resetemailpass",
    label: "Reset Password",
  },
  {
    key: "/",
    label: "Sign Out",
  },
];

const SignOnNavbar = ({ nav }) => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <Layout>
        <Header className="bg-white h-[109] flex items-center justify-between">
          <div className="flex">
            <img src={IconTitle} alt=""/>
            <p className="p-0 m-3 text-xl">การกีฬาแห่งประเทศไทย</p>
          </div>
          {nav && (
            <div className="flex justify-end">
              <Dropdown
                overlay={
                  <Menu onClick={handleMenuClick}>
                    {menuItems.map((item) => (
                      <Menu.Item className="text-lm" key={item.key}>
                        {item.label}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomRight"
                arrow
                trigger={["click"]}
              >
                <Button className="w-[80px] h-[40px] bg-[#dcdce4] " type="text">
                  <UserOutlined
                    style={{ fontSize: "25px", marginLeft: "-5px" }}
                  />
                  <DownOutlined style={{ fontSize: "25px" }} />
                </Button>
              </Dropdown>
            </div>
          )}
        </Header>
      </Layout>
    </>
  );
};

export default SignOnNavbar;
