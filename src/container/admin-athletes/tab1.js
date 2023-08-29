import React from "react";
import { Row, Col, Divider, Form, Button } from "antd";
import FormIdentity from "../../components/admin/form/form-identity";
import FormPersonal from "../../components/admin/form/form-personal";
import FormAddress from "../../components/admin/form/form-address";
import ContactInfo from "../../components/admin/contact-info";
import UploadImgInfo from "../../components/admin/upload-imginfo";
import FormRelation from "../../components/admin/form/form-relation";
import FormEducation from "../../components/admin/form/form-education";
import { useLocation } from "react-router-dom";
import StatusData from "../../components/admin/statusdata";
import { ArrowRightOutlined } from "@ant-design/icons";
import moment from "moment";

const Tab1 = ({ onNextClick }) => {
  const location = useLocation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log(values);
    const {
      citizen_id,
      code_personnel,
      firstname_th,
      lastname_th,
      firstname_en,
      lastname_en,
      nickname_th,
      nickname_en,
      dob,
      gender,
      religion,
      race,
      nationality,
      region_address_detail1,
      region_address_detail_en1,
      region_country_id1,
      region_province_id1,
      region_district_id1,
      region_subdistrict_id1,
      region_zipcode1,
      region_country_id2,
      region_address_detail2,
      region_address_detail_en2,
      region_province_id2,
      region_district_id2,
      region_subdistrict_id2,
      region_zipcode2,
    } = values;

    const region_citizen = {
      region_country_id: region_country_id1,
      region_address_detail: region_address_detail1,
      region_address_detail_en: region_address_detail_en1,
      region_province_id: region_province_id1,
      region_district_id: region_district_id1,
      region_subdistrict_id: region_subdistrict_id1,
      region_zipcode: region_zipcode1,
    };

    const region_current = {
      region_country_id: region_country_id2,
      region_address_detail: region_address_detail2,
      region_address_detail_en: region_address_detail_en2,
      region_province_id: region_province_id2,
      region_district_id: region_district_id2,
      region_subdistrict_id: region_subdistrict_id2,
      region_zipcode: region_zipcode2,
    };

    const formData = {
      citizen_id,
      code_personnel,
      firstname_th,
      lastname_th,
      firstname_en,
      lastname_en,
      nickname_th,
      nickname_en,
      dob: moment(dob).format('YYYY-MM-DD'),
      gender,
      religion,
      race,
      nationality,
      region_citizen,
      region_current,
    };
    console.log(formData);
  };

  // http://192.168.10.113:20001/api/v1/personnel/athlete/create
  console.log("form", form.getFieldsValue());

  return (
    <>
      <div>
        <Row className="pt-5">
          <Col span={6}>
            <UploadImgInfo w={157} h={157} row={24} />
            <ContactInfo type={location.pathname.includes("/athletes")} />
            <StatusData />
          </Col>
          <Col span={1}>
            <Divider type="vertical" className="h-full m-0" />
          </Col>
          <Col span={17} className="pr-20">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <FormIdentity type={location.pathname.includes("/athletes")} />
              <Divider
                type="horizontal"
                style={{ width: "110%", marginLeft: "-42px" }}
              />
              <FormPersonal />
              <Divider
                type="horizontal"
                style={{ width: "110%", marginLeft: "-42px" }}
              />
              <FormAddress
                title={
                  "ที่อยู่ตามบัตรประชาชน/ ที่อยู่ที่ลงทะเบียน(นักกีฬาต่างชาติ)"
                }
                form={form}
                address_th="region_address_detail1"
                address_en="region_address_detail_en1"
                country="region_country_id1"
                province="region_province_id1"
                district="region_district_id1"
                subdistrict="region_subdistrict_id1"
                zip_code="region_zipcode1"
              />
              <FormAddress
                title={"ที่อยู่ติดต่อปัจจุบัน"}
                button={true}
                form={form}
                address_th="region_address_detail2"
                address_en="region_address_detail_en2"
                country="region_country_id2"
                province="region_province_id2"
                district="region_district_id2"
                subdistrict="region_subdistrict_id2"
                zip_code="region_zipcode2"
              />
              <Divider
                type="horizontal"
                style={{ width: "110%", marginLeft: "-42px" }}
              />
              <FormRelation />
              <FormEducation />
              <Form.Item className="flex justify-end">
                <Button type="primary" htmlType="submit">
                  ถัดไป <ArrowRightOutlined style={{ fontSize: "16px" }} />
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Tab1;
