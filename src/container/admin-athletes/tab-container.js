import React, { useState, useRef } from "react";
import AdminNavbar from "../../layout/admin-navbar";
import AdminSidebar from "../../layout/admin-sidebar";
import { LeftOutlined } from "@ant-design/icons";
import { Layout, Tabs, Button } from "antd";
import { UserIcon } from "../../assets/user-icon";
import { AddFileIcon } from "../../assets/addfile-icon";
import { FilmIcon } from "../../assets/film-icon";
import { useNavigate } from "react-router-dom";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import { useLocation } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;

const TabContent = (props) => {
  return (
    <div className="flex p-1">
      <span className="text-2xl pt-1">{props.icon}</span>
      <div>
        <p className="m-0">{props.name}</p>
        <p className="m-0 text-xs">{props.title}</p>
      </div>
    </div>
  );
};

const TabContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeKey, setActiveKey] = useState("1");
  const tabsRef = useRef(null);

  console.log("key", activeKey);

  const handleNextClick = () => {
    const nextKey = String(Number(activeKey) + 1);
    if (nextKey <= "4") {
      setActiveKey(nextKey);
    }
  };

  const handlePrevClick = () => {
    const prevKey = String(Number(activeKey) - 1);
    if (prevKey >= "1") {
      setActiveKey(prevKey);
    }
  };
  return (
    <>
      <Layout>
        <AdminSidebar />
        <Layout>
          <AdminNavbar />
          <div className="flex justify-between">
            <Button
              type="link"
              className="text-[#5E5873] text-xl w-[170px] ml-5 mt-5"
              onClick={() => {location.pathname.includes("/athletes") ? navigate("/athletes") : navigate("/staff")}}
            >
              <LeftOutlined className="transform -translate-y-[3px]" />
              {location.pathname.includes("/athletes")
                ? "นักกีฬาทั้งหมด"
                : "บุคลากรทั้งหมด"}
            </Button>
            <Button type="primary" className="mt-7 mr-5">
            บันทึกแบบร่าง
            </Button>
          </div>
          <Content className="mt-16 ml-[30px] mr-5 rounded bg-white mb-10 shadow-2xl">
            <Tabs
              type="card"
              className="mt-[-48px]"
              activeKey={activeKey}
              onChange={setActiveKey}
              ref={tabsRef}
            >
              <TabPane
                tab={
                  <TabContent
                    name="ข้อมูลส่วนบุคคล"
                    title="เพิ่มข้อมูลส่วนบุคคล"
                    icon={<UserIcon />}
                  />
                }
                key="1"
              >
                <Tab1
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                />
              </TabPane>
              <TabPane
                tab={
                  <TabContent
                    name={
                      location.pathname.includes("/athletes")
                        ? "ข้อมูลนักกีฬา"
                        : "ข้อมูลบุคลากร"
                    }
                    title={
                      location.pathname.includes("/athletes")
                        ? "เพิ่มข้อมูลนักกีฬา"
                        : "เพิ่มข้อมูลบุคลากร"
                    }
                    icon={<UserIcon />}
                  />
                }
                key="2"
              >
                <Tab2
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                />
              </TabPane>
              <TabPane
                tab={
                  <TabContent
                    name="ภาพและวิดีโอ"
                    title="เพิ่มภาพและวิดีโอ"
                    icon={<AddFileIcon />}
                  />
                }
                key="3"
              >
                <Tab3
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                />
              </TabPane>
              <TabPane
                tab={
                  <TabContent
                    name="คลังเอกสาร"
                    title="เพิ่มเอกสาร"
                    icon={<FilmIcon />}
                  />
                }
                key="4"
              >
                <Tab4
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                />
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default TabContainer;
