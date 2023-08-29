import SSOForm from "../../components/sso/sso-form";
import { Form, Input, Modal } from "antd";
import { BallPlayerIcon } from "../../assets/ballplayer-icon";
import { IntersectIcon } from "../../assets/intersect-icon";
import SignOnNavbar from "../../layout/ssonav";
import { useNavigate } from "react-router-dom";
import "../../style/SignOn.css";
import axios from "axios";
import React from "react";
import {
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const data_SignIn = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("http://192.168.10.113:20001/api/v1/auth/sign-in", data_SignIn)
      .then((res) => {
        // console.log("data",data_SignIn)
        // console.log("res:", res.data.data.access_token);
        localStorage.setItem("Token", res.data.data.access_token);
        // console.log("Token", res.data.data.access_token)
        if (res.request.status === 200) {
          Modal.success({
            content: (
              <div className="">
                <p className="mt-2 mb-3">Sign-in Successfully</p>
              </div>
            ),
            onOk: () => {
              navigate("/successsignin")
            },
          });
        }
      })
      .catch((err) => {
        console.log("err",err);
        if(err) {
          Modal.error({
            content: (
              <div className="modal_error">
                <p className="mt-2 mb-3">Username or Password incorrect</p>
                <p className="text-2xl text-[#EA5455] text-center mb-0">
                  <ExclamationCircleOutlined />
                </p>
              </div>
            ),
            onOk: () => {
              navigate("/");
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
                <BallPlayerIcon className="transform -translate-y-[95%]" />
              </div>
              <div className="flex items-center h-[510px] transform -translate-x-[20%]">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <SSOForm
                    name={"Sign in"}
                    buttonText={"Sign-in"}
                    signup={true}
                    link={"/successsignin"}
                  >
                    <p className="text-sm font-medium mb-1 mt-4">Email</p>
                    <Form.Item
                      name="email"
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
                        placeholder="Email"
                        className="w-[272px] h-[50px]  bg-white border-2 border-[#E2E2EA]"
                      />
                    </Form.Item>

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

export default SignIn;
