import { Row, Col, Divider, Form, Button } from "antd";
import React from "react";
import FormDisease from "../../components/admin/form/form-disease";
import FormDrug from "../../components/admin/form/form-drug";
import FormFood from "../../components/admin/form/form-food";
import FormHistory from "../../components/admin/form/form-history";
import FormSpecificPlayer from "../../components/admin/form/form-specific";
import UploadImgInfo from "../../components/admin/upload-imginfo";
import { useLocation } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Tab2 = ({ onNextClick, onPrevClick }) => {
  const location = useLocation();
  return (
    <>
      <div>
        <Row className="pr-10 pl-10 pt-5 pb-10">
          <Col span={24} className="pr-10 pl-10">
            <UploadImgInfo h={200} w={178} show={true} row={6} />
          </Col>
          <Divider />
          <Col span={24}>
            <FormSpecificPlayer
              type={location.pathname.includes("/athletes")}
            />
          </Col>
          <Divider />
          <Col span={24}>
            <FormDisease />
            <Divider />
            <FormDrug />
            <Divider />
            <FormFood />
            <Divider />
            <FormHistory type={location.pathname.includes("/athletes")} />
          </Col>
        </Row>
        <div className="flex justify-between pl-20 pr-20">
          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={onPrevClick}>
              <ArrowLeftOutlined style={{ fontSize: "16px" }} /> ก่อนหน้า
            </Button>
          </Form.Item>
          <Form.Item >
            <Button type="primary" onClick={onNextClick}>
              ถัดไป <ArrowRightOutlined style={{ fontSize: "16px" }} />
            </Button>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default Tab2;
