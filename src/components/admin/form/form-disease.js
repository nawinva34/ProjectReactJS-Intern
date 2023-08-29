import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";

const FormItem = Form.Item;

const FormDisease = () => {
  const [formItems, setFormItems] = useState([{ thai: "", eng: "" }]);

  const addFormItem = () => {
    setFormItems([...formItems, { thai: "", eng: "" }]);
  };

  const removeFormItem = (index) => {
    setFormItems(formItems.filter((_, i) => i !== index));
  };

  const handleNameChange = (index, e) => {
    const values = [...formItems];
    values[index].thai = e.target.value;
    setFormItems(values);
  };

  const handleLastNameChange = (index, e) => {
    const values = [...formItems];
    values[index].eng = e.target.value;
    setFormItems(values);
  };

  return (
    <>
      <div className="pl-10 pr-10">
        <p className="text-lg text-[#0066FF] mb-2 pb-2">ข้อมูลด้านการแพทย์</p>
        <Form layout="vertical">
          {formItems.map((item, index) => (
            <Row key={index} gutter={[16, 16]}>
              <Col span={11}>
                <FormItem label="ข้อมูลโรคประจำตัว (ภาษาไทย)">
                  <Input
                    placeholder="กรอกข้อมูลโรคประจำตัว"
                    value={item.thai}
                    onChange={(e) => handleNameChange(index, e)}
                  />
                </FormItem>
              </Col>
              <Col span={11}>
                <FormItem label="ข้อมูลโรคประจำตัว (ภาษาอังกฤษ)">
                  <Input
                    placeholder="กรอกข้อมูลโรคประจำตัว"
                    value={item.eng}
                    onChange={(e) => handleLastNameChange(index, e)}
                  />
                </FormItem>
              </Col>
              <Col span={2}>
                {index === formItems.length - 1 ? (
                  <Button
                    className="mt-[30px]"
                    type="primary"
                    onClick={addFormItem}
                    disabled={!item.thai && !item.eng}
                  >
                    +
                  </Button>
                ) : (
                  <Button
                    className="mt-[30px]"
                    type="primary"
                    danger
                    onClick={() => removeFormItem(index)}
                  >
                    -
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Form>
      </div>
    </>
  );
};
export default FormDisease;
