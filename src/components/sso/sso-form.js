import { Link } from "react-router-dom";
import { Button } from "antd";

const SSOForm = ({ children, name, buttonText, signup}) => {
  console.log();
  return (
    <>
      <div className="SSOForm">
        <b className="text-[48px] text-[#267FFF] leading-none" >{name}</b>
        {children}
        <div >
            <Button
              type="primary"
              htmlType="submit"
              className="w-[272px] h-[38px] bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 text-[14px]"
            >
              {buttonText}
            </Button>

          {signup && (
            <Link to="/signup" className="flex w-10">
              <Button
                type="link"
                htmlType="button"
                className="text-sm font-semibold m-0 p-0 w-10 flex"
              >
                sign up
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SSOForm;
