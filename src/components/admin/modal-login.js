import { Modal, Button } from "antd";
// import { useHistory } from "react-router-dom";

const ModalLogin = (props) => {
  const { setVisible, visible} = props;
//   const history = useHistory();

//   const handleOk = () => {
//     setVisible(false);
//     if (success) {
//       history.push("/dashboard");
//     }
//   };

  return (
    <Modal
      width={334}
      onOpen={() => setVisible(true)}
      open={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      closable={false}
      footer={[
        <div className="flex justify-center">
          <Button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 text-[14px]">
            OK
          </Button>
        </div>,
      ]}
    >
      <div className="flex justify-center">
        <p>Sign-in Successfully</p>
      </div>
    </Modal>
  );
};

export default ModalLogin;
