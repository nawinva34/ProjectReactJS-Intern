import { Card, Row, Col } from "antd";
import SignOnNavbar from "../../layout/ssonav";
import { DBIcon } from "../../assets/db-icon";
import { AcademyIcon } from "../../assets/academy-icon";
import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../../style/SignOn.css";
import axios from "axios";

const SuccessSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("Token"));
  }, []);

  const token = localStorage.getItem("Token");
  // const decoded = jwt_decode(token);

  // const uid = decoded.access_token.id;
  // console.log("decode", decoded);
  // console.log("uid", uid);

  const [showBigData, setShowBigData] = useState(false);
  const [enableBigData, setEnableBigData] = useState(true);
  const [showAcademy, setShowAcademy] = useState(false);
  // const [enableAcademy, setEnableAcademy] = useState(true);

  useEffect(() => {
    axios(`http://192.168.10.113:20001/api/v1/auth/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      const sortData = res.data.data.account_role;
  
      if (sortData[0].role_featured === "BIGDATA") {
        switch (sortData[0].role_permission_code) {
          case "B_ADMIN":
            setShowAcademy(true);
            setShowBigData(true);
            break;
          case "B_REPORTER":
            setShowBigData(true);
            break;
          case "B_VIEWER":
            setShowBigData(true);
            break;
          default:
            setShowAcademy(false);
            setEnableBigData(false);
            break;
        }
      }
  
      if (sortData[1].role_featured === "ACADEMY") {
        switch (sortData[1].role_permission_code) {
          case "A_ADMIN":
            setShowAcademy(true);
            setShowBigData(true);
            break;
          case "A_REPORTER":
            setShowAcademy(true);
            break;
          case "A_VIEWER":
            setShowAcademy(true);
            break;
          default:
            setShowAcademy(false);
            // setEnableAcademy(false);
            break;
        }
      }
    });
  }, [token])



  return (
    <>
      <div className="container">
        <SignOnNavbar nav={true} />
        <div className="flex items-center justify-center h-[90vh] w-screen">
          <Row gutter={[64]}>
            <Col>
              {showBigData && (
                <Card
                  className="h-[389px] w-[409px] rounded-[50px] flex items-center justify-center cursor-pointer"
                  onClick={enableBigData ? () => navigate("/athletes") : () => {}}
                >
                  <div className="flex leading-none pb-5">
                    <DBIcon className="ml-1 mr-3 text-[#383770]" />
                    <p className="text-[48px] text-[#383770] font-bold m-0 text-center">
                      BIG DATA CENTER
                    </p>
                  </div>
                  <p className="text-[30px] text-center text-[#44444F] w-[300px] m-auto">
                    ระบบรวบรวมและจัดการฐานข้อมูลกีฬา
                  </p>
                </Card>
              )}
            </Col>

            <Col>
              {showAcademy && (
                <Card className="h-[389px] w-[409px] rounded-[50px] flex items-center justify-center cursor-pointer">
                  <div className="flex leading-none ml-4 pb-5">
                    <AcademyIcon className="text-[#383770]" />
                    <p className="text-[48px] text-[#383770] font-bold m-0 pt-5 pl-5 text-center">
                      ACADEMY
                    </p>
                  </div>
                  <p className="text-[30px] text-center text-[#44444F] w-[350px] m-auto">
                    ระบบขอใบอนุญาตประกอบสถานฝึกสอนกีฬา
                  </p>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SuccessSignIn;
