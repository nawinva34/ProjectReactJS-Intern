import { Form, Radio, Input, Row, Col } from "antd";
import { useState } from "react";
import "../../../style/AntdCustom.css";

const FormIdentity = ({ type }) => {
  const [formIDCard, setFormIDCard] = useState(false);
  const [formIDPassport, setFormIDPassport] = useState(false);
  //   const [form] = Form.useForm();

  const onRadioChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "นักกีฬาไทย") {
      setFormIDCard(true);
      setFormIDPassport(false);
    } else {
      setFormIDCard(false);
      setFormIDPassport(true);
    }
  };

  return (
    <>
      <div className="p-2 text-[#44444F]">
        <p className="text-lg text-[#0066FF] mb-2">ข้อมูลรหัสประจำตัว</p>
        <Row gutter={[32]}>
          <Col span={12}>
            <Form.Item
              label={type ? "รหัสประจำตัวนักกีฬา" : "รหัสประจำตัวบุคลากร"}
              layout="vertical"
              name="code_personnel"
            >
              <Input className="h-[38px] " />
            </Form.Item>
          </Col>
          <Col span={12}>
            <p className="m-0">ประเภทนักกีฬา</p>
            <Radio.Group
              onChange={onRadioChange}
              label="ประเภทนักกีฬา"
              className="mt-4"
            >
              <Radio value="นักกีฬาไทย">
                {type ? "นักกีฬาไทย" : "บุคลากรไทย"}
              </Radio>
              <Radio value="นักกีฬาต่างชาติ">
                {type ? "นักกีฬาต่างชาติ" : "บุคลากรต่างชาติ"}
              </Radio>
            </Radio.Group>
          </Col>
          <Col span={12}>
            <Form.Item
              label="เลขบัตรประชาชน"
              required={formIDCard}
              name="citizen_id"
            >
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="หมายเลขพาสปอร์ต"
              required={formIDPassport}
              name="passport_id"
            >
              <Input className="h-[38px]" />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormIdentity;
