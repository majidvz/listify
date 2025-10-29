import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { FC } from "react";
import { useCrudContext } from "../../context";

export const NewCardButton: FC = () => {
  const {
    dispatch: { setIsNewCardModalOpen },
  } = useCrudContext();

  const openNewCardModal = () => {
    setIsNewCardModalOpen(true);
  };

  return (
    <Button
      size="large"
      type="primary"
      icon={<PlusOutlined />}
      onClick={openNewCardModal}
    >
      New Card
    </Button>
  );
};
