import React, { useState } from "react";
import { Button, Divider, Col, Row } from "antd";
import { IconEditInfo } from "../../assets/iconeditinfo-icon";
import ModalContactInfo from "./modal-contactInfo";
import ContactInfoList from "./contact-infolist";
import "../../style/AntdCustom.css";


const ContactInfo = (props) => {
  const [visible, setVisible] = useState(false);
  const [contactInfo, setContactInfo] = useState({});
  

  const onCreate = (values) => {
    setContactInfo(values);
    setVisible(false);
  };

  console.log("data", contactInfo);

  return (
    <>
      <div className="text-center">
        <p className="m-1 text-base mt-2">ชื่อ - นามสกุล</p>
        <p className="text-[#92929D] text-sm">{props.type ? "ตำแหน่งนักกีฬา" : "ตำแหน่งบุคลากร"}</p>
        <Divider
          className="tab1"
          style={{ margin: "12px 0px 24px 26px", width: "80%" }}
        />
        <Divider
          className="tab1"
          style={{ margin: "60px 0px 12px 26px", width: "80%" }}
        />
      </div>
      <div className="flex justify-center">
        <p className="m-2 text-base">ช่องทางการติดต่อ</p>
        <Button
          type="link"
          className="p-0 h-9"
          onClick={() => setVisible(true)}
        >
          <IconEditInfo />
        </Button>
        <ModalContactInfo
          visible={visible}
          onCancel={() => setVisible(false)}
          onCreate={onCreate}
        />
      </div>
      <div className="text-start text-[#44444F] mt-2">
        <>
          <ContactInfoList title={"โทรศัพท์"} value={contactInfo.phone} />
          <ContactInfoList title={"E-mail"} value={contactInfo.email} />
          <ContactInfoList title={"Facebook"} value={contactInfo.facebook} />
          <ContactInfoList title={"LINE id"} value={contactInfo.line} />
          <ContactInfoList title={"Instagram"} value={contactInfo.instagram} />
          <ContactInfoList title={"Youtube"} value={contactInfo.youtube} />
          <ContactInfoList title={"twitter"} value={contactInfo.twitter} />
          <ContactInfoList title={"Website"} value={contactInfo.website} />
          <ContactInfoList title={"Fax"} value={contactInfo.fax} />
        </>
        <Divider
          className="tab1"
          style={{ margin: "24px 0px 12px 26px", width: "80%" }}
        />
      </div>
    </>
  );
};

export default ContactInfo;
