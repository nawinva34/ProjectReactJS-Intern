import AdminNavbar from "../../layout/AdminNavbar";
import AdminSidebar from "../../layout/AdminSidebar";
import StatusBoard from "../../components/admin/status-board";
import { Button, Layout } from "antd";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import TablePlayerList from "../../components/admin/table-list";
import { useState } from "react";

const { Content } = Layout;

const StaffDashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Layout>
        <AdminSidebar />
        <Layout>
          <AdminNavbar />
          <Content className="mt-5 ml-[30px] mr-5 rounded">
            <p className="text-[#5E5873] text-xl">บุคลากรทั้งหมด</p>
            <div className=" rounded mb-4">
              <StatusBoard
                name1={"บุคลากรทั้งหมด"}
                name2={"จำนวนบุคลากรชาย"}
                name3={"จำนวนบุคลากรหญิง"}
                name4={"อายุเฉลี่ยบุคลากรชาย"}
                name5={"อายุเฉลี่ยบุคลากรหญิง"}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Button type="primary">{selectedRowKeys.length}</Button>
                <Button type="link" className="flex text-[#B9B9C3] mb-2">
                  <DownloadOutlined className="text-2xl" />
                  <p className="mt-[10px] ml-1 mr-[-15px]">ดาวน์โหลด</p>
                </Button>
                <Button type="link" className="flex text-[#B9B9C3] mb-2">
                  <DeleteOutlined className="text-2xl" />
                  <p className="mt-[10px] ml-1">ลบรายการที่เลือก</p>
                </Button>
              </div>
              <Button type="primary" className="h-[30px] w-[113px]">
                เพิ่มบุคลากร
              </Button>
            </div>
            <div className="bg-white rounded h-[686px] p-1 mt-2 shadow-2xl">
              <TablePlayerList rowSelection={rowSelection} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default StaffDashboard;
