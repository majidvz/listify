import type { FC } from "react";
import { Flex } from "antd";
import { CrudHeader } from "./components/Header";
import { CardsList } from "./components/List";
import { CrudWrapper } from "./style";

export const Crud: FC = () => {
  return (
    <CrudWrapper>
      <Flex vertical className="container">
        <CrudHeader />
        <hr className="hr-line" />
        <CardsList />
      </Flex>
    </CrudWrapper>
  );
};
