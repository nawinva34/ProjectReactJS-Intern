import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Space, Table, Button, Row, Col } from "antd";
import ModalEducation from "../modal-education";
import React, { useState } from "react";
import ChildrenModal from "../chrildren-modal";

const items = [
  {
    key: "1",
    label: "แก้ไข",
  },
  {
    key: "2",
    label: "ลบ",
  },
];

const columns = [
  {
    title: "ระดับการศึกษา",
    dataIndex: "level",
    key: "level",
    align: "center",
  },
  {
    title: "ชื่อสถานศึกษา",
    dataIndex: ["university_th", "university_eng"],
    render: (text, record) => (
      <div>
        <p style={{ padding: "0px" }} className="m-0">
          {record.university_th}
        </p>
        <p className="m-0 text-[11px] text-[#9A9A9A]">
          {record.university_eng}
        </p>
      </div>
    ),
    align: "center",
  },
  {
    title: "คณะ/ภาควิชา",
    dataIndex: "major",
    key: "major",
    align: "center",
  },
  {
    title: "ปีที่เริ่ม/ปีที่จบ",
    dataIndex: ["start_year", "end_year"],
    render: (text, record) => (
      <div>
        <p style={{ padding: "0px" }} className="m-0">
          {record.start_year}
          {record.end_year ? "/" : ""}
          {record.end_year ? record.end_year : ""}
        </p>
        <p className="m-0 text-[11px] text-[#9A9A9A]">
          {record.namer_eng} {record.lastr_eng}
        </p>
      </div>
    ),
    align: "center",
  },
  {
    title: "",
    dataIndex: "operation",
    key: "operation",
    align: "center",
    padding: "0px",
    render: () => (
      <Space size="middle" style={{ padding: "0px" }}>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <span style={{ padding: "0px" }}>
            <MoreOutlined className="text-xl" />
          </span>
        </Dropdown>
      </Space>
    ),
  },
];

const FormEducation = () => {
  const [visible, setVisible] = useState(false);
  const [dataEducation, setDataEducation] = useState([
    {
      key: 1,
      level: "ปริญญาตรี",
      university_th: "มหาวิทยาลัยจุฬาลงกรณ์",
      university_eng: "chulalongkorn university",
      major: "โภชนาการ",
      major_eng: "",
      start_year: "2552",
      end_year: "2555",
    },
  ]);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  const handleCreate = (values) => {
    setDataEducation([
      ...dataEducation,
      { key: dataEducation.length + 1, ...values },
    ]);
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <div className="flex justify-between mb-3">
            <p className="text-lg text-[#0066FF] mb-2">ข้อมูลด้านการศึกษา</p>
            <Button
              type="primary"
              onClick={showModal}
              className="h-8 w-[113px]"
            >
              <p className="m-0 text-xs">+ เพิ่มการศึกษา</p>
            </Button>
          </div>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={dataEducation}
            className="mb-10 table-relation"
            pagination={false}
          />
          <ModalEducation
            className="modaladddata"
            visible={visible}
            onCreate={handleCreate}
            onCancel={handleCancel}
          />
        </Col>
      </Row>
    </>
  );
};

export default FormEducation;
