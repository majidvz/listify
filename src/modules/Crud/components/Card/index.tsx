import { FC } from "react";
import { Button, Flex, message, Popconfirm, type PopconfirmProps } from "antd";
import type { IListItem } from "@/models/IListItem";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useCrudContext } from "../../context";
import { CardWrapper } from "./style";

export const CardItem: FC<IListItem> = ({
  id,
  title,
  description,
  createAt,
}) => {
  const {
    value: { list },
    dispatch: { setIsNewCardModalOpen, setModalInitialValues, setList },
  } = useCrudContext();

  const editTheCard = () => {
    setIsNewCardModalOpen(true);
    setModalInitialValues({ title, description, id });
  };

  const popConfirmOk: PopconfirmProps["onCancel"] = () => {
    const updatedList = list.filter((listItem) => listItem.id !== id);
    setList(updatedList);
    message.success("The card is deleted successfully.");
  };

  return (
    <CardWrapper title={title} variant="borderless">
      <p className="description poppins-regular">{description}</p>

      <Flex align="center" className="footer">
        <span className="create-at poppins-regular">{createAt}</span>

        <Button type="link" icon={<EditOutlined />} onClick={editTheCard}>
          Edit
        </Button>

        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={popConfirmOk}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
          <Button type="link" icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Popconfirm>
      </Flex>
    </CardWrapper>
  );
};
