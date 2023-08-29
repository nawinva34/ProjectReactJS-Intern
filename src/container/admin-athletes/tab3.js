import React from "react";
import { Row, Col, Form, Button } from "antd";
import UploadVideoImg from "../../components/admin/upload-videoimg";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Tab3 = ({ onNextClick, onPrevClick }) => {
  return (
    <div>
      <Row className="pr-10 pl-10 pt-5">
        <Col span={24}>
          <UploadVideoImg />
        </Col>
      </Row>
      <div className="flex justify-between pl-20 pr-20 pt-10">
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={onPrevClick}>
            <ArrowLeftOutlined style={{ fontSize: "16px" }} /> ก่อนหน้า
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onNextClick}>
            ถัดไป <ArrowRightOutlined style={{ fontSize: "16px" }} />
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Tab3;
