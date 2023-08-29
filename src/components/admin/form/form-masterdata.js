import React, { useEffect, useState } from "react";
import { Form, Input, Row, Col, Switch, Radio } from "antd";

const FormMasterData = ({
  nameThai,
  nameEng,
  showPlayer,
  data_id_th,
  data_id_en,
  data_id_codename,
  position_id,
  statusById,
  name_th,
  name_en,
  name_mid,
  position,
  onFinish,
  type,
  onSwitchChange,
  status,
}) => {

  const [form] = Form.useForm();

  useEffect(() => {
    if (type === "edit") {
      form.setFieldsValue({
        [name_th]: data_id_th,
        [name_en]: data_id_en, 
        status: statusById,
        [name_mid]: data_id_codename,
        position: position_id,
      });
    } 
  }, [data_id_th, data_id_en,statusById,data_id_codename,position_id, form]);

  console.log("form", form.getFieldsValue());

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFieldsChange={(_, allFields) => {
          onFinish(allFields);
          console.log("value: ", allFields);
        }}
      >
        <Row gutter={[16]}>
          {showPlayer ? (
            ""
          ) : (
            <Col span={24}>
              <Form.Item label="ตำแหน่งหลัก" name={position}>
                <Radio.Group>
                  <Radio value="GOALKEEPER"> ผู้รักษาประตู </Radio>
                  <Radio value="DEFENDER"> กองหลัง </Radio>
                  <Radio value="MIDFIELDER"> กองกลาง </Radio>
                  <Radio value="FORWARD"> กองหน้า </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          )}
          <Col span={12} className="mt-3">
            <Form.Item label={nameThai} name={name_th}>
              <Input className="h-10" />
            </Form.Item>
          </Col>
          <Col span={12} className="mt-3">
            <Form.Item label={nameEng} name={name_en}>
              <Input className="h-10" />
            </Form.Item>
          </Col>
          <Col span={12}>
            {showPlayer ? (
              ""
            ) : (
              <Form.Item label="อักษรย่อ (ภาษาอังกฤษ)" name={name_mid}>
                <Input className="h-10" />
              </Form.Item>
            )}
          </Col>
          <Col span={12} className="flex justify-end items-center pt-7">
            <Form.Item name="status">
              <div className="flex">
                <p className="mr-2">สถานะการใช้งาน</p>
                <Switch
                  checked={status}
                  value={status}
                  onChange={(checked) => onSwitchChange(checked)}
                  style={{ backgroundColor: status ? "#3DD598" : "lightgrey" }}
                />
                <p className="ml-2">{status ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormMasterData;
