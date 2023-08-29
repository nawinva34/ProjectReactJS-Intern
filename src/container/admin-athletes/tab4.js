import React, { useState } from "react";
import { Button, Checkbox, Form } from "antd";
import UploadDocument from "../../components/admin/upload-document";
import { useLocation } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Tab4 = ({onPrevClick}) => {
  const [idCardUploaded, setIdCardUploaded] = useState(false);
  const [passportUploaded, setPassportUploaded] = useState(false);
  const [houseUploaded, setHouseUploaded] = useState(false);
  const [athleteUploaded, setAthleteUploaded] = useState(false);
  const [otherUploadSuccess, setOtherUploadSuccess] = useState(false);
  const [otherFileName, setOtherFileName] = useState([]);
  const location = useLocation();

  const handleIdCardUpload = () => {
    setIdCardUploaded(true);
  };

  const handlePassportUpload = () => {
    setPassportUploaded(true);
  };

  const handleHouseUpload = () => {
    setHouseUploaded(true);
  };

  const handleAthleteUpload = () => {
    setAthleteUploaded(true);
  };

  const handleOtherUploadSuccess = (file) => {
    setOtherUploadSuccess(true);
    setOtherFileName([...otherFileName, file]);
    console.log([otherFileName]);
  };

  // console.log(otherFileName)

  return (
    <div className="pl-10 pr-10">
      <p className="text-lg text-[#0066FF] pb-2 mt-3">คลังเอกสาร</p>
      <div className="bg-[#F6F6F680] h-[237px] rounded-xl p-5">
        <p className="text-lg text-[#0066FF] pb-5">ตรวจสอบเอกสารสำคัญ</p>
        <span>
          <Checkbox
            disabled={!idCardUploaded}
            checked={idCardUploaded}
            className="mr-3"
          />
          <span
            className={`${
              idCardUploaded ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            ภาพเอกสารบัตรประชาชน
          </span>
        </span>
        <span className="ml-10">
          <Checkbox
            disabled={!passportUploaded}
            checked={passportUploaded}
            className="mr-3"
          />
          <span
            className={`${
              passportUploaded ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            ภาพเอกสารพาสปอร์ต
          </span>
        </span>
        <span className="ml-10">
          <Checkbox
            disabled={!houseUploaded}
            checked={houseUploaded}
            className="mr-3"
          />
          <span
            className={`${
              houseUploaded ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            ภาพเอกสารข้อมูลทะเบียนบ้าน
          </span>
        </span>
        <span className="ml-10">
          <Checkbox
            disabled={!athleteUploaded}
            checked={athleteUploaded}
            className="mr-3"
          />
          <span
            className={`${
              athleteUploaded ? "text-blue-500 underline" : "text-gray-700"
            }`}
          >
            {location.pathname.includes("/athletes")
              ? "ภาพบัตรประจำตัวนักกีฬา"
              : "ภาพบัตรประจำตัวบุคลากร"}
          </span>
        </span>
        <p className="text-lg text-[#0066FF] pb-2 pt-5">ตรวจสอบเอกสารอื่นๆ</p>
        {otherUploadSuccess ? `${otherFileName}` : ""}
      </div>

      <div>
        <UploadDocument
          documentType="IdentityCard"
          onUploadSuccess={handleIdCardUpload}
          textTitle="ภาพเอกสารบัตรประชาชน"
        />
        <UploadDocument
          documentType="Passport"
          onUploadSuccess={handlePassportUpload}
          textTitle="ภาพเอกสารพาสปอร์ต"
        />
        <UploadDocument
          documentType="HouseInformation"
          onUploadSuccess={handleHouseUpload}
          textTitle="ภาพเอกสารข้อมูลทะเบียนบ้าน"
        />
        <UploadDocument
          documentType="Athlete"
          onUploadSuccess={handleAthleteUpload}
          textTitle={
            location.pathname.includes("/athletes")
              ? "ภาพบัตรประจำตัวนักกีฬา"
              : "ภาพบัตรประจำตัวบุคลากร"
          }
        />
        <UploadDocument
          documentType="OtherUpload"
          onUploadSuccess={handleOtherUploadSuccess}
          onFileChange={(file) =>
            setOtherFileName([...otherFileName, file.name])
          }
          textTitle="เอกสารอื่น ๆ"
        />
      </div>
      <div className="pt-5">
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={onPrevClick}>
            <ArrowLeftOutlined style={{ fontSize: "16px" }} /> ก่อนหน้า
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Tab4;
