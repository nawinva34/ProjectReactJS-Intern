import React, { useState } from "react";
import { Col, Row, Form, Radio, Select, Input } from "antd";

const FormSpecificPlayer = ({ type }) => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();

  const onChangePosition = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeFoot = (e) => {
    console.log("radio checked", e.target.value);
    setValue2(e.target.value);
  };

  const onChangeHand = (e) => {
    console.log("radio checked", e.target.value);
    setValue3(e.target.value);
  };

  const handleForm1Change = (value) => {
    setSelect1(value);
  };

  const handleForm2Change = (value) => {
    setSelect2(value);
  };

  return (
    <>
      <div className="pl-10 pr-10">
        <Form layout="vertical">
          <p className="text-lg text-[#0066FF] mb-2 pb-2">
            {type ? "ข้อมูลเฉพาะของนักกีฬา" : "ข้อมูลเฉพาะของบุคลากร"}
          </p>
          <Row gutter={[32]}>
            {type ? (
              <>
                {" "}
                <Col span={24}>
                  <Form.Item label="ตำแหน่งของผู้เล่น">
                    <Radio.Group onChange={onChangePosition} value={value}>
                      <Radio className="mr-10" value={1}>
                        ผู้รักษาประตู
                      </Radio>
                      <Radio className="mr-10" value={2}>
                        กองหลัง
                      </Radio>
                      <Radio className="mr-10" value={3}>
                        กองกลาง
                      </Radio>
                      <Radio className="mr-10" value={4}>
                        กองหน้า
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="ตำแหน่งการเล่น 1"
                    className="h-[38px]"
                    name="select1"
                  >
                    <Select placeholder="ไม่ระบุ" onChange={handleForm1Change}>
                      <Select.Option value="ปีกซ้าย">ปีกซ้าย</Select.Option>
                      <Select.Option value="ปีกขวา">ปีกขวา</Select.Option>
                      <Select.Option value="กองกลาง">กองกลาง</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="ตำแหน่งการเล่น 2"
                    className="h-[38px]"
                    name="select2"
                  >
                    <Select
                      placeholder="ไม่ระบุ"
                      disabled={!select1}
                      onChange={handleForm2Change}
                    >
                      <Select.Option value="ปีกซ้าย">ปีกซ้าย</Select.Option>
                      <Select.Option value="ปีกขวา">ปีกขวา</Select.Option>
                      <Select.Option value="กองกลาง">กองกลาง</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="ตำแหน่งการเล่น 3"
                    className="h-[38px]"
                    name="select3"
                  >
                    <Select placeholder="ไม่ระบุ" disabled={!select2}>
                      <Select.Option value="ปีกซ้าย">ปีกซ้าย</Select.Option>
                      <Select.Option value="ปีกขวา">ปีกขวา</Select.Option>
                      <Select.Option value="กองกลาง">กองกลาง</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12} className="mt-10">
                  <Form.Item label="เท้าข้างที่ถนัด">
                    <Radio.Group onChange={onChangeFoot} value={value2}>
                      <Radio className="mr-10" value={1}>
                        เท้าขวา
                      </Radio>
                      <Radio className="mr-10" value={2}>
                        เท้าซ้าย
                      </Radio>
                      <Radio className="mr-10" value={3}>
                        ถนัดทั้งสองเท้า
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col span={12} className="mt-10">
                  <Form.Item label="มือข้างที่ถนัด">
                    <Radio.Group onChange={onChangeHand} value={value3}>
                      <Radio className="mr-10" value={1}>
                        มือขวา
                      </Radio>
                      <Radio className="mr-10" value={2}>
                        มือซ้าย
                      </Radio>
                      <Radio className="mr-10" value={3}>
                        ถนัดทั้งสองมือ
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </>
            ) : (
              <>
                <Col span={12}>
                  <Form.Item label="ตำแหน่ง" name="position">
                    <Select placeholder="ตำแหน่ง">
                      <Select.Option value="ผู้จัดการทีม">ผู้จัดการทีม</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="แผนก/ฝ่าย" name="department">
                    <Select placeholder="แผนก/ฝ่าย">
                      <Select.Option value="บริหาร">บริหาร</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}
            <Col span={6}>
              <Form.Item
                label={
                  <div className="flex">
                    <p className="m-0">น้ำหนัก</p>
                    <p className="ml-5 font-bold">kg.</p>
                  </div>
                }
                name="weight"
              >
                <Input placeholder="น้ำหนัก" className="h-[38px]" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={
                  <div className="flex">
                    <p className="m-0">ส่วนสูง</p>
                    <p className="ml-5 font-bold">cm.</p>
                  </div>
                }
                name="height"
              >
                <Input placeholder="ส่วนสูง" className="h-[38px]" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="กรุ๊ปเลือด" name="blood">
                <Select placeholder="กรุณาเลือก">
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="O">O</Select.Option>
                  <Select.Option value="AB">AB</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default FormSpecificPlayer;
