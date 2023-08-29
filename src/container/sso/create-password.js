import SSOForm from "../../components/sso/sso-form";
import { Form, Input, notification, Modal } from "antd";
import { IntersectIcon } from "../../assets/intersect-icon";
import { CreatePassIcon } from "../../assets/createpass-icon";
import { MailIcon } from "../../assets/mail-icon";
import SignOnNavbar from "../../layout/ssonav";
import '../../style/SignOn.css'
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

const CreatePassword = () => {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const onFinish = (values) => {
    const data = {
      email: location.state.id,
      password: values.password,
      confirmpassword: values.confirmpassword,
    };
    console.log("data: ", data);

    axios
      .post("http://192.168.10.113:20001/api/v1/auth/sign-up", data)
      .then((res) => {
        console.log("res:", res);        
        if (res.status === 201) {
          notification.success({
            duration: 3,
            className:
              "bg-[#267FFF] w-[300px] h-[80px] text-lm font-bold flex justify-between items-center",
            message: (
              <div className="text-center mt-2 text-[#FFFFFF] ml-10">
                SIGNUP COMPLETE!
              </div>
            ),
            icon: (
              <CheckCircleOutlined
                style={{ color: "white", fontSize: "50px", marginTop: "-12px" }}
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
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response) {
          const statusCode = error.response.data.message;
          Modal.error({
            content: (
              <div className="modal_error">
                <p className="text-2xl text-[#EA5455] text-center mb-0">
                  <ExclamationCircleOutlined />
                </p>
                <p className="mt-2">{statusCode}. Please try again later.</p>
              </div>
            ),
            onOk: () => {
              navigate("/signup");
            },
          });
        }
      });
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
                <CreatePassIcon className="transform -translate-y-[110%] ml-5" />
              </div>
              <div className="flex items-center h-[500px] transform -translate-x-[50px]">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <SSOForm
                    name={"Create Password"}
                    buttonText={"Submit"}
                    link={"/"}
                  >
                    <div className="flex">
                      <MailIcon className="mb-[20px] mt-1" />
                      <p className="text-base font-bold pl-2">
                        {location.state.id}
                      </p>
                    </div>
                    <p className="text-sm font-medium mb-1">Password</p>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input Password",
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

                    <p className="text-sm font-medium mb-1">Confirm Password</p>
                    <Form.Item
                      name="confirmpassword"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please input Confirm Password",
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue("password") === value) {
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
                    <p className="w-[275px] text-[12px] text-[#949494] mb-[5px]">
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

export default CreatePassword;
