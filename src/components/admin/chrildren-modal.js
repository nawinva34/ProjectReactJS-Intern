import React from "react";
import { Modal, Button , Form} from "antd";

const ChildrenModal = ({
  visible,
  onCreate,
  onEdit,
  onCancel,
  nameTitle,
  children,
  width,
  type,
}) => {

  // console.log("type", type);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    if (type === "create") {
      onCreate(values);
      onCancel();
      form.resetFields();
    } else {
      onEdit(values)
      onCancel();
    }
  };

  return (
    <>
      <Modal
        width={width}
        open={visible}
        footer={false}
        closable={false}
        onCancel={onCancel}
        title={
          <div className="flex justify-between">
            <p className="text-[#0066FF] text-lg">{nameTitle}</p>
            <div>
              <Button
                type="text"
                form="modal_contact"
                key="cancel"
                onClick={onCancel}
              >
                ละทิ้ง
              </Button>
              <Button
                key="submit"
                type="primary"
                onClick={() => handleFinish()}
              >
                บันทึก
              </Button>
            </div>
          </div>
        }
      >
        {React.cloneElement(children, {
          handleCreate: onCreate,
          setVisible: onCancel,
        })}
      </Modal>
    </>
  );
};

export default ChildrenModal;
