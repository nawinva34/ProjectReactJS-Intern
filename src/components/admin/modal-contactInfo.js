import { Form, Input, Modal, Button } from "antd";

const ModalContactInfo = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title={
        <div className="flex justify-between">
            <p className="text-[#0066FF] text-lg">ช่องทางการติดต่อ</p>
            <div>
                <Button type="text" form="modal_contact" key="cancel" onClick={onCancel}>ละทิ้ง</Button>
                <Button type="primary" form="modal_contact" key="submit" htmlType="submit">บันทึก</Button>
            </div>
        </div>
      }
      footer={visible}  
      onCancel={onCancel}
      closable={false}
      onOk={onCreate}
    >
      <Form form={form} id='modal_contact' layout="vertical" className="formModalContact" onFinish={onCreate} >
        <Form.Item name="phone" label="โทรศัพท์">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="facebook" label="Facebook">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="line" label="LINE id">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="instagram" label="Instagram">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="youtube" label="Youtube">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="twitter" label="twitter">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input className="h-[38px]" />
        </Form.Item>
        <Form.Item name="fax" label="Fax">
          <Input className="h-[38px]" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalContactInfo;
