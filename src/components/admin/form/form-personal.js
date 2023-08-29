import { Form, Input, Row, Col, DatePicker, Select } from "antd";
import { useState } from "react";
import "../../../style/AntdCustom.css";

const FormPersonal = () => {
  // const [form] = Form.useForm();
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');

  console.log("dob",dob)

  const handleDatePickerChange = (date, dateString) => {
    console.log("date", dateString);
    setDob(dateString);
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    console.log('new age:', age);

    setAge(age.toString());
  };

  // console.log("dob", form.getFieldsValue());

  return (
    <>
      <div className="p-2">
        <p className="text-lg text-[#0066FF] mb-2">ข้อมูลบุคคล</p>
        <Row gutter={[32]}>
          <Col span={12}>
            <Form.Item label="ชื่อจริง (ภาษาไทย)" name="firstname_th">
              <Input placeholder="ชื่อ" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="นามสกุล (ภาษาไทย)" name="lastname_th">
              <Input placeholder="นามสกุล" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ชื่อจริง (ภาษาอังกฤษ)" name="firstname_en">
              <Input placeholder="Firstname" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="นามสกุล (ภาษาอังกฤษ)" name="lastname_en">
              <Input placeholder="Lastname" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="ชื่อเล่น (ภาษาไทย)" name="nickname_th">
              <Input placeholder="ชื่อเล่น" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="ชื่อเล่น (ภาษาอังกฤษ)" name="nickname_en">
              <Input placeholder="Nickname" className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="วัน/เดือน/ปีเกิด" name="dob">
              <DatePicker
                className="h-[38px]"
                placeholder="10/10/10"
                onChange={handleDatePickerChange}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="อายุ">
              <Input
                className="h-[38px]"
                disabled={!age}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="เพศ" className="h-[38px]">
              <Select>
                <Select.Option value="ชาย">ชาย</Select.Option>
                <Select.Option value="หญิง">หญิง</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="ศาสนา" className="h-[38px]">
              <Select>
                <Select.Option value="อิสลาม">อิสลาม</Select.Option>
                <Select.Option value="พุทธ">พุทธ</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="เชื้อชาติ" className="h-[38px]" name="race">
              <Select>
                <Select.Option value="ไทย">ไทย</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="สัญชาติ" className="h-[38px]" name="nationality">
              <Select>
                <Select.Option value="ไทย">ไทย</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormPersonal;
