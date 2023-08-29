import React, { useState } from "react";
import { Modal, Form, Input, Button, Row, Col, Checkbox } from "antd";

const ModalEducation = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onCreate(values);
      console.log("values", values);
    });
  };

  const [disableInput, setDisableInput] = useState(true);

  const onCheckboxChange = (e) => {
    setDisableInput(!e.target.checked);
  };

  return (
    <Modal
      width={620}
      open={visible}
      title={
        <div className="flex justify-between">
          <p className="text-[#0066FF] text-lg">ข้อมูลทางด้านการศึกษา</p>
          <div>
            <Button
              type="text"
              form="modal_contact"
              key="cancel"
              onClick={onCancel}
            >
              ละทิ้ง
            </Button>
            <Button
              type="primary"
              form="modal_contact"
              key="submit"
              htmlType="submit"
              onClick={handleOk}
            >
              บันทึก
            </Button>
          </div>
        </div>
      }
      footer={visible}
      onCancel={onCancel}
      closable={false}
      okText="Add"
      cancelText="Cancel"
      onOk={handleOk}
    >
      <Form
        form={form}
        id="modal_relation"
        layout="vertical"
        className="formModalRelation"
        onFinish={handleOk}
      >
        <Row gutter={[16]}>
          <Col span={12}>
            <Form.Item label="ชื่อสถานศึกษา (ภาษาไทย)" name="university_th">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ชื่อสถานศึกษา (ภาษาอังกฤษ)" name="university_eng">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="คณะ/ภาควิชา  (ภาษาไทย)" name="major">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="คณะ/ภาควิชา (ภาษาอังกฤษ)" name="major_eng">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="ระดับการศึกษา" name="level">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="ปีที่เริ่มศึกษา (ค.ศ.)" name="start_year">
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="จบการศึกษาเมื่อ (ค.ศ.)" name="end_year">
              <Input className="h-[38px]" disabled={disableInput} />
            </Form.Item>
          </Col>
          <Col span={12} className="flex items-center">
            <Checkbox onChange={onCheckboxChange}>กำลังศึกษาอยู่</Checkbox>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalEducation;
