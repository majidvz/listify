import type { FC } from "react";
import { NewCardButton } from "../NewCardButton";
import { CrudHeaderWrapper } from "./style";

export const CrudHeader: FC = () => {
  return (
    <CrudHeaderWrapper align="center" justify="space-between">
      <h1 className="title poppins-black">Listify</h1>
      <NewCardButton />
    </CrudHeaderWrapper>
  );
};
