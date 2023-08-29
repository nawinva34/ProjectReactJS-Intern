import React, { useEffect, useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import {
  Input,
  Dropdown,
  Space,
  Table,
  Button,
  Menu,
  Slider,
  Select,
} from "antd";
// import { useState } from "react";
import { EyeIcon } from "../../assets/eye-icon";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const TablePlayerList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [age, setAge] = useState([12, 45]);
  const [visible, setVisible] = useState(false);

  // console.log("data", dataList)

  const filterData = (pathname) => {
    switch (pathname) {
      case '/athletes':
        return props.data?.dataLists?.filter(item => item.account_type === 1);
      case '/staff':
        return props.data?.dataLists?.filter(item => item.account_type === 2);
      default:
        return props.data.dataLists;
    }
  };
  const filteredData = filterData(location.pathname);

  const handleMenuClick = (e) => {
    console.log("Selected item:", e.item.props.children);
    setVisible(false);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const marks = {
    12: "12",
    45: "45",
  };

  const menu = (
    <Menu onClick={handleMenuClick} className="w-[225px]">
      <div className="p-3">
        <p className="mb-5">ตัวกรอง</p>
        <p>อายุ</p>
        <Slider
          range
          min={12}
          max={45}
          value={age}
          onChange={handleAgeChange}
          marks={marks}
        />
      </div>
      <div className="p-3 pt-0">
        <p>เพศ</p>
        <Select placeholder="ทั้งหมด" className="w-full">
          <Select.Option value="ชาย">ชาย</Select.Option>
          <Select.Option value="หญิง">หญิง</Select.Option>
        </Select>
      </div>
      <div className="p-3 pb-5">
        <p>จังหวัด</p>
        <Select placeholder="ทั้งหมด" className="w-full">
          <Select.Option value="ชาย">กทม</Select.Option>
          <Select.Option value="หญิง">เชียงใหม่</Select.Option>
        </Select>
      </div>
      <div className="flex justify-center">
        <Button type="primary" className="h-[30px] w-[113px] mb-5">
          ค้นหา
        </Button>
      </div>
    </Menu>
  );

  const checkPath = () => {
    if (location.pathname === "/athletes") {
      navigate("/athletes/edit");
    } else {
      navigate("/staff/edit");
    }
  };

  const items = [
    {
      key: "1",
      label: <p onClick={checkPath}>แก้ไขข้อมูล</p>
    },
    {
      key: "2",
      label: "ลบรายการนี้",
    },
  ];

  const columns = [
    {
      title: props.type ? "เลขอ้างอิงนักกีฬา" : "รหัสบุคลากร",
      dataIndex: props.code_personnel,
      key: props.code_personnel,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
      width: "15%",
      align: "center",
    },
    {
      title: "ชื่อ - นามสกุล",
      dataIndex: "new_name",
      key: "new_name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
      width: "25  %",
      align: "center",
      render: (text, record) => {
        return (
          <>
            <div>
              <div className="flex justify-center">
                <p className="mr-2 font-bold">{record.firstname_en}</p>
                <p className="font-bold">{record.lastname_en}</p>
              </div>
              <p className="text-[#B9B9C3] text-xs">{record.citizen_id}</p>
            </div>
          </>
        );
      },
    },
    {
      title: "ตำแหน่ง",
      dataIndex: "position",
      key: "position",
      width: "15%",
      align: "center",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "สถานะทีมชาติ",
      dataIndex: "teamstatus",
      key: "teamstatus",
      width: "15%",
      align: "center",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "ต้นสังกัดปัจจุบัน",
      dataIndex: "agency",
      key: "agency",
      width: "15%",
      align: "center",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "จัดการ",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      render: () => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <p className="m-0">
              <MoreOutlined className="text-xl" />
            </p>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const onShowSizeChange = (current, pageSize, total) => {
    console.log(current, pageSize, total);
  };

  return (
    <div>
      <div className="flex items-center justify-end mt-3 mb-3 ">
        <p className="m-0 mr-3 text-[#696974]">ค้นหา</p>
        <Input
          placeholder={
            props.type
              ? "ค้นหานักกีฬาจากชื่อ/รหัสนักกีฬา/รหัสบัตรประชาชน"
              : "ค้นหานักกีฬาจากชื่อ/รหัสบุคลากร]/รหัสบัตรประชาชน"
          }
          className="w-[325px] h-[38px]"
          // value={searchText}
          // onChange={handleSearch}
        />
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          onOpenChange={setVisible}
          open={visible}
        >
          <Button type="link" className="text-[#6E6B7B]">
            <EyeIcon className="transform -translate-y-[2px]" />
            การแสดงผล
            <DownOutlined className="mr-3" />
          </Button>
        </Dropdown>
      </div>
      <Table
        rowSelection={props.rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={{
          showSizeChanger: true,
          onShowSizeChange: onShowSizeChange,
          // pageSize: 10,
          defaultCurrent: 1,
          position: "none",
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} จาก ${total} รายการ`,
          className: "my-pagination",
        }}
      />
    </div>
  );
};
export default TablePlayerList;
