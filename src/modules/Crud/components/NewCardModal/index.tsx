import { Form, Input, Modal } from "antd";
import type { FC } from "react";
import { useCrudContext } from "../../context";

export const NewCardModal: FC = () => {
  const {
    value: { isNewCardModalOpen },
    dispatch: { setIsNewCardModalOpen },
  } = useCrudContext();

  const [form] = Form.useForm();

  const { TextArea } = Input;

  const submitForm = () => {
    setIsNewCardModalOpen(false);
  };

  const closeModal = () => {
    setIsNewCardModalOpen(false);
  };

  return (
    <Modal
      title="Create new card"
      closable={{ "aria-label": "Close Button" }}
      open={isNewCardModalOpen}
      onOk={submitForm}
      okText="Create"
      cancelText="Cancel"
      onCancel={closeModal}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Card title"
          rules={[
            { required: true, message: "Please enter a title." },
            { min: 3, message: "Title must be at least 3 characters long." },
          ]}
        >
          <Input size="large" placeholder='e.g. "Design landing page"' />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description (optional)"
          rules={[
            { required: true, message: "Please enter a description." },
            {
              min: 3,
              message: "Description must be at least 3 characters long.",
            },
          ]}
        >
          <TextArea placeholder="Add a short note or details about this card..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};
