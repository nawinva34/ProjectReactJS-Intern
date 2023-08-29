import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Space, Table, Button, Col, Row, Form } from "antd";
import React, { useState } from "react";
import ModalRelation from "../modal-relation";

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
    title: "ความสัมพันธ์",
    dataIndex: "relation",
    key: "relation",
    align: "center",
  },
  {
    title: "ชื่อ - นามสกุล",
    dataIndex: ["namer_th", "namer_th", "namer_eng", "lastr_eng"],
    render: (text, record) => (
      <div>
        <p style={{ padding: "0px" }} className="m-0">
          {record.namer_th} {record.lastr_th}
        </p>
        <p className="m-0 text-[11px] text-[#9A9A9A]">
          {record.namer_eng} {record.lastr_eng}
        </p>
      </div>
    ),
    align: "center",
  },
  {
    title: "เบอร์โทรศัพท์",
    dataIndex: "telr",
    key: "telr",
    align: "center",
  },
  {
    title: "อีเมลติดต่อ",
    dataIndex: "mailr",
    key: "mailr",
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

const FormRelation = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      id: 1,
      relation: "มารดา",
      namer_th: "เจนจิรา",
      lastr_th: "นารากร",
      namer_eng: "JENJIRA",
      lastr_eng: "NARAHRON",
      telr: "061-4478569",
      mailr: "thanakanpd@gmail.com",
    },
  ]);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);
  // const handleCreate = (values) => {
  //   console.log("value",values)
  //   setVisible(false);
  //   setData([...data, { key: data.length + 1, ...values }]);
  // };

  const handleCreate = (values) => {
    setData([...data, { id: data.length + 1, ...values }]);
    setVisible(false);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleCreate}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Row>
          <Col span={24}>
            <div className="flex justify-between mb-3">
              <p className="text-lg text-[#0066FF] mb-2">ข้อมูลความสัมพันธ์</p>
              <Button
                type="primary"
                onClick={showModal}
                className="h-8 w-[113px] "
              >
                <p className="m-0 text-xs ml-[-5px]">+ เพิ่มความสัมพันธ์</p>
              </Button>
            </div>
          </Col>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              className="mb-10 table-relation"
              pagination={false}
            />
          </Col>
        </Row>
      </Form>
      <ModalRelation
        className="modaladddata"
        visible={visible}
        onCreate={handleCreate}
        onCancel={handleCancel}
      />
    </>
  );
};

export default FormRelation;
