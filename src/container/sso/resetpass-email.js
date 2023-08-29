import SSOForm from "../../components/sso/sso-form";
import { Form, Input } from "antd";
import { BallPlayerIcon } from "../../assets/ballplayer-icon";
import { IntersectIcon } from "../../assets/intersect-icon";
import SignOnNavbar from "../../layout/ssonav";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import '../../style/SignOn.css'

const ResetPass_Email = () => {
  const [disabled] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  var token = localStorage.getItem("Token");
  var decoded = jwt_decode(token);

  useEffect(() => {
    form.setFieldsValue({
      Email: decoded?.access_token.email,
    });
    console.log("decode", decoded);
  }, );

  const onFinish = (values) => {
    navigate("/resetpass", {
      state: {
        id: values.Email,
      },
    });
    console.log("Success:", values);
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
                <IntersectIcon className="mt-[101px] " />
                <BallPlayerIcon className="transform -translate-y-[95%] ml-[-10px]" />
              </div>
              <div className="flex items-center h-[460px] transform -translate-x-[20%]">
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
                >
                  <SSOForm
                    name={"Reset password"}
                    buttonText={"Reset password"}
                    signup={false}
                  >
                    <p className="text-sm font-medium mb-1 mt-4">Email</p>
                    <Form.Item
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please input Email",
                        },
                        {
                          pattern: true,
                          type: "email",
                          message: "Incorrect Email",
                        },
                      ]}
                    >
                      <Input
                        disabled={disabled}
                        value={decoded.email}
                        className="w-[272px] h-[50px]  bg-white border-2 border-[#E2E2EA]"
                      />
                    </Form.Item>
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

export default ResetPass_Email;
