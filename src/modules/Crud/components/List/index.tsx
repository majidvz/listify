import type { FC } from "react";
import { useCrudContext } from "../../context";
import { Empty } from "../Empty";
import { CardItem } from "../Card";
import { ListWrapper } from "./style";

export const CardsList: FC = () => {
  const {
    value: { list },
  } = useCrudContext();

  if (list.length > 0)
    return (
      <ListWrapper vertical gap={16} align="flex-start" justify="flex-start">
        {list.map((listItem) => (
          <CardItem key={`${listItem.id}`} {...listItem} />
        ))}
      </ListWrapper>
    );
  else
    return (
      <Empty title="There's no card" description="Let create a new card" />
    );
};
