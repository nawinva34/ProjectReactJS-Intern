import React from "react";
import { Modal, Form, Input, Button, Row, Col, Select } from "antd";

const ModalRelation = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onCreate(values);
      console.log("values", values);
    });
  };

  return (
    <Modal
      width={620}
      open={visible}
      title={
        <div className="flex justify-between">
          <p className="text-[#0066FF] text-lg">ข้อมูลความสัมพันธ์</p>
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
        onFinish={onCreate}
      >
        <Row gutter={[16]}>
          <Col span={24} className="mb-7">
            <Form.Item
              label="ความสัมพันธ์ที่เกี่ยวข้อง"
              className="w-[278px] h-[38px]"
              name="relation"
            >
              <Select>
                <Select.Option value="บิดา">บิดา</Select.Option>
                <Select.Option value="มารดา">มารดา</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ชื่อจริง (ภาษาไทย)" name="namer_th">
              <Input placeholder="ชื่อ" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="นามสกุล (ภาษาไทย)" name="lastr_th">
              <Input placeholder="นามสกุล" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ชื่อจริง (ภาษาอังกฤษ)" name="namer_eng">
              <Input placeholder="Firstname" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="นามสกุล (ภาษาอังกฤษ)" name="lastr_eng">
              <Input placeholder="Lastname" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="เบอร์โทรศัพท์" name="telr">
              <Input placeholder="080-12345678" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="อีเมลล์" name="mailr">
              <Input placeholder="exemple@gggg.com" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label=<div>
                ที่อยู่ (ภาษาไทย)
                <Button
                  type="link"
                  className="text-[#0B8BEA]"
                >
                  <u>
                    คัดลอกจากที่อยู่ตามบัตรประชาชน / ที่อยู่ที่ลงทะเบียน
                    ของนักกีฬา
                  </u>
                </Button>
              </div>
              name="region_address_detail"
            >
              <Input
                placeholder="12/34 หมู่บ้านสุขใจ ซอย 11"
                className="h-[38px]"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="ที่อยู่ (ภาษาอังกฤษ)"
              name="region_address_detail_en"
            >
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="ประเทศ"
              className=" h-[38px]"
              name="region_country_id"
            >
              <Select>
                <Select.Option value="ไทย">ไทย</Select.Option>
                <Select.Option value="พม่า">พม่า</Select.Option>
                <Select.Option value="ลาว">ลาว</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="จังหวัด"
              className=" h-[38px]"
              name="region_province_id"
            >
              <Select>
                <Select.Option value="เชียงใหม่">กทม</Select.Option>
                <Select.Option value="เชียงใหม่">เชียงใหม่</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} className="mt-7">
            <Form.Item
              label="อำเภอ"
              className=" h-[38px]"
              name="region_district_id"
            >
              <Select>
                <Select.Option value="เมือง">เมือง</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6} className="mt-7">
            <Form.Item
              label="ตำบล"
              className=" h-[38px]"
              name="region_subdistrict_id"
            >
              <Select>
                <Select.Option value="พญาไท">พญาไท</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12} className="mt-7" name="region_zipcode">
            <Form.Item label="รหัสไปรษณีย์" name="zipcode">
              <Input className=" h-[38px]" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalRelation;
