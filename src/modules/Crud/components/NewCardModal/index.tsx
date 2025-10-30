import { Form, Input, Modal } from "antd";
import { useEffect, useState, type FC } from "react";
import moment from "moment";
import { useCrudContext } from "../../context";

interface IFormData {
  title: string;
  description: string;
}

export const NewCardModal: FC = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const {
    value: { isNewCardModalOpen, modalInitialValues, list },
    dispatch: { setIsNewCardModalOpen, setList, setModalInitialValues },
  } = useCrudContext();

  const { TextArea } = Input;
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const closeModal = () => {
    setIsNewCardModalOpen(false);
    form.resetFields();
    setModalInitialValues(undefined);
  };

  const onFinish = (data: IFormData) => {
    const createAt = moment().format("YYYY/MM/DD HH:mm");
    if (modalInitialValues) {
      const updatedList = list.map((listItem) =>
        listItem.id === modalInitialValues.id
          ? { ...listItem, ...data, createAt }
          : listItem
      );
      setList(updatedList);
    } else {
      const id = Math.ceil(Math.random() * 1000);
      const payload = { ...data, id, createAt };
      setList((prev) => [...prev, payload]);
    }
    setModalInitialValues(undefined);
    form.resetFields();
    setIsNewCardModalOpen(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      title: modalInitialValues?.title ?? "",
      description: modalInitialValues?.description ?? "",
    });
  }, [modalInitialValues, form]);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setIsFormValid(true))
      .catch(() => setIsFormValid(false));
  }, [form, values]);

  return (
    <Modal
      title="Create new card"
      closable={{ "aria-label": "Close Button" }}
      open={isNewCardModalOpen}
      okText={modalInitialValues ? "Update" : "Create"}
      cancelText="Cancel"
      onCancel={closeModal}
      onOk={() => form.submit()}
      okButtonProps={{
        disabled: !isFormValid,
        htmlType: "submit",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={modalInitialValues}
        onFinish={onFinish}
      >
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
          label="Description"
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
