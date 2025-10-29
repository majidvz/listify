import type { FC } from "react";
import { CrudProvider } from "@/modules/Crud/context";
import { Crud } from "@/modules/Crud";

export const CrudPage: FC = () => {
  return (
    <CrudProvider>
      <Crud />
    </CrudProvider>
  );
};
