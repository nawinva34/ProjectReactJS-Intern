import { Layout, Menu, Divider } from "antd";
import React,{useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon1Icon } from "../assets/icon1-icon";
import { Icon2Icon } from "../assets/icon2-icon";
import { Icon3Icon } from "../assets/icon3-icon";
import { Icon4Icon } from "../assets/icon4-icon";
import { Icon5Icon } from "../assets/icon5-icon";
import { SettingIcon } from "../assets/setting-icon";
import IconTitle from "../img/IconTitle.svg";
import "../style/AdminSidebar.css";
const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current,setCurrent] = useState('')
  const changeMenu = (e,path) =>{
    setCurrent(e.key)
    navigate(path)
    // console.log("path",path, "key",e.key)
  }

  useEffect(() => {
    if(location.pathname === '/athletes'){
      setCurrent('1');
    } else if(location.pathname === '/staff') {
      setCurrent('2');
    } else if(location.pathname === '/tablerelation') {
      setCurrent('3');
    } else if(location.pathname === '/tableeducation') {
      setCurrent('4');
    } else if(location.pathname === '/tableathletes') {
      setCurrent('5');
    } else if(location.pathname === '/tablepositionstaff') {
      setCurrent('6');
    } else if(location.pathname === '/tabledepartmentstaff') {
      setCurrent('7');
    }
    // console.log(location.pathname);
  }, [location.pathname])

  return (
    <>
      <Sider
        className="bg-white sidebar shadow-xl"
        width={260}
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            marginTop: -16,
            background: "#FFFFFF",
            display: "flex",
            padding: "15px 15px 15px 15px",
          }}
        >
          <div className="mt-4 flex">
            <img src={IconTitle} alt="" className="h-[54px] w-[40px]" />
            <p className="NameIcon">การกีฬาแห่งประเทศไทย</p>
          </div>
        </div>
        <Menu
          selectedKeys={[current]}
          mode="inline"
          style={{
            borderRight: 0,
            height: "100vh",
            textAlign: "left",
            padding: "0px 15px",
          }}
        >
          <Menu.Item key="1" onClick={(e) => changeMenu(e,'/athletes')}>
            <div className="flex">
              <Icon1Icon className="mr-2" />
              <p className="m-0">นักกีฬา</p>
            </div>
          </Menu.Item>
          <Menu.Item key="2" onClick={(e) => changeMenu(e,'/staff')}>
            <div className="flex">
              <Icon2Icon className="mr-2" />
              <p className="m-0">บุคลากร</p>
            </div>
          </Menu.Item>
          <div className="flex mb-[-15px] text-[#B9B9C3]">
            <SettingIcon className="mr-2 mt-5 ml-10" />
            <p className="mt-5 mb-[-3px] text-sm">การตั้งค่า</p>
          </div>
          <Divider className="sidebar" />
          <Menu.Item key="3" onClick={(e) => changeMenu(e,'/tablerelation')}>
            <div className="flex">
              <Icon3Icon className="mr-2" />
              <p className="m-0">ตั้งค่าประเภทความสัมพันธ์</p>
            </div>
          </Menu.Item>
          <Menu.Item key="4" onClick={(e) => changeMenu(e,'/tableeducation')}>
            <div className="flex">
              <Icon4Icon className="mr-2" />
              <p className="m-0">ตั้งค่าระดับการศึกษา</p>
            </div>
          </Menu.Item>
          <Menu.Item key="5" onClick={(e) => changeMenu(e,'/tableathletes')}>
            <div className="flex">
              <Icon1Icon className="mr-2" />
              <p className="m-0">ตั้งค่านักกีฬา</p>
            </div>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <div className="flex">
                <Icon5Icon className="mr-2" />
                ตั้งค่าบุคลากร
              </div>
            }
          >
            <Menu.Item key="6" onClick={(e) => changeMenu(e,'/tablepositionstaff')}>ตำแหน่งบุคลากร</Menu.Item>
            <Menu.Item key="7" onClick={(e) => changeMenu(e,'/tabledepartmentstaff')}>แผนกบุคลากร</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};
export default AdminSidebar;
