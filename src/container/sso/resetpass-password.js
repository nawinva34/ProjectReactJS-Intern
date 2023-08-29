import SSOForm from "../../components/sso/sso-form";
import { Form, Input, notification, Modal } from "antd";
import { IntersectIcon } from "../../assets/intersect-icon";
import { CreatePassIcon } from "../../assets/createpass-icon";
import SignOnNavbar from "../../layout/ssonav";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import '../../style/SignOn.css'
import axios from "axios";

const ResetPass_Password = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log()

  const onFinish = (values) => {
    const data = {
      email: location.state.id,
      password: values.password,
      newpassword: values.newpassword,
      confirmnewpassword: values.confirmnewpassword,
    };
    console.log("data:" ,data);

    axios
      .patch("http://192.168.10.113:20001/api/v1/auth/resetpassword", data)
      .then((response) => {
        console.log("response:" ,response);
        if (response.status === 200) {
          notification.success({
            duration: 3,
            className:
              "bg-[#267FFF] w-[300px] h-[80px] text-lm font-bold flex justify-between items-center",
            message: (
              <div className="text-center mt-2 text-[#FFFFFF] ml-10">
                RESET PASSWORD COMPLETE!
              </div>
            ),
            icon: (
              <CheckCircleOutlined
                style={{ color: "white", fontSize: "50px" }}
                className="mb-10"
              />
            ),
            closable: false,
            onClose: () => {
              navigate("/");
              console.log("Success:", values);
            },
          });
        }
      })
      .catch((err) => {
        console.log("err",err.response.status)
        if(err.response.status === 401) {
          Modal.error({
            content: (
              <div className="modal_error">
                <p className="text-2xl text-[#EA5455] text-center mb-0">
                  <ExclamationCircleOutlined />
                </p>
                <p className="mt-2">Incorrect old password. Please try again</p>
              </div>
            ),
            onOk: () => {
              navigate("/resetemailpass");
            },
          });
        }
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="container">
        <SignOnNavbar />
        <div className="flex items-center justify-center h-[90vh] w-screen">
          <div className="bg-white bg-opacity-80 w-[839px] h-[509px] rounded-[50px] relative">
            <div className="flex justify-between">
              <div>
                <IntersectIcon className="mt-[101px]" />
                <CreatePassIcon className="transform -translate-y-[110%] ml-10" />
              </div>
              <div className="flex items-center h-[500px] transform -translate-x-[50px]">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <SSOForm name={"Reset Password"} buttonText={"Submit"}>
                    <p className="text-sm font-medium mb-1">Password</p>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input old Password",
                        },
                        {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-])(?=.{8,20})/,
                          message: "Incorrect Password",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="********"
                        className="w-[272px] h-[50px] bg-white border-2 border-[#E2E2EA]"
                      />
                    </Form.Item>

                    <p className="text-sm font-medium mb-1">New Password</p>
                    <Form.Item
                      name="newpassword"
                      rules={[
                        {
                          required: true,
                          message: "Please input new Password",
                        },
                        {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-])(?=.{8,20})/,
                          message: "Incorrect Password",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="********"
                        className="w-[272px] h-[50px] bg-white border-2 border-[#E2E2EA]"
                      />
                    </Form.Item>

                    <p className="text-sm font-medium mb-1">
                      Confirm New Password
                    </p>
                    <Form.Item
                      name="confirmnewpassword"
                      dependencies={["newpassword"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please input Confirm Password",
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (
                              !value ||
                              getFieldValue("newpassword") === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject("Password does not match");
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="********"
                        className="w-[272px] h-[50px] bg-white border-2 border-[#E2E2EA]"
                      />
                    </Form.Item>
                    <p className="w-[275px] text-[12px] text-[#949494] mb-[-10px]">
                      รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร และประกอบไปด้วย
                      ตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก
                    </p>
                  </SSOForm>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass_Password;
