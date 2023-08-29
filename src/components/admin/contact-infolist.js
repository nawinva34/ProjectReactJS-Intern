import ContactInfo from "./contact-info";
import { Col, Row } from "antd";

const ContactInfoList = ({ title, value }) => {
  return (
    <>
      <Row gutter={[16]} className="mb-4">
        <Col span={10}>
          <p className="text-[11px] ml-8 font-bold">{title}</p>
        </Col>
        <Col span={14}>
          <p className="text-[11px]">{value ? value : "-"}</p>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfoList;
