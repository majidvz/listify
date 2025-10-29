import type { FC } from "react";
import { Flex } from "antd";
import { NewCardButton } from "../NewCardButton";
import { EmptyWrapper } from "./style";

interface IEmptyProps {
  title: string;
  description: string;
}

export const Empty: FC<IEmptyProps> = ({ title, description }) => {
  return (
    <EmptyWrapper vertical align="center" justify="center" gap={16}>
      <img src="/assets/images/empty.svg" />

      <Flex vertical>
        <span className="title poppins-bold">{title}</span>
        {description && (
          <p className="description poppins-regular">{description}</p>
        )}
      </Flex>

      <NewCardButton />
    </EmptyWrapper>
  );
};
