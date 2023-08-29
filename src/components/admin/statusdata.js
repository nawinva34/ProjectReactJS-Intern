import { Row, Col, Switch, Divider } from "antd";
import { useState } from "react";

const StatusData = () => {
  const [status, setStatus] = useState(true);

  const onChange = (checked) => {
    setStatus(!status)
    // console.log(`switch to ${checked}`);
  };

  return (
    <>
      <div className="p-3">
        <Row gutter={8}>
          <Col span={24} className="flex justify-center">
            <p>สถานะของข้อมูล</p>
          </Col>
          <Col span={13} className="flex items-center">
            <Switch
              size="small"
              className="ml-3"
              style={{
                backgroundColor: status ? "#3DD598" : "lightgrey",
              }}
              defaultChecked onChange={onChange}
            />
            <p className="text-[11px] pl-2">เผยแพร่ข้อมูล</p>
          </Col>
          <Col span={11}>
            <p className="text-[11px] mt-6">สร้างขึ้นเมื่อ</p>
            <p className="text-[11px]  text-[#4A7AFF] mt-2">07/09/2020</p>
          </Col>
          <Divider
            // className="tab1"
            style={{ margin: "20px 0px 12px 26px", width: "80%" }}
          />
          <Col span={13}>
          <p className="text-[11px] pl-3">ข้อมูลล่าสุดโดย</p>
          <p className="text-[11px] pl-3">ลักษมัณท์ สุขวิมล</p>
          <p className="text-[11px] pl-3 text-[#92929D]">เจ้าหน้าที่สมาคมฟุตบอล</p>
          </Col>
          <Col span={11}>
          <p className="text-[11px]">วันที่เปลี่ยนแปลงล่าสุด</p>
          <p className="text-[11px] text-[#4A7AFF] mt-2">07/09/2020</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StatusData;
