import { useState, type FC, type PropsWithChildren } from "react";
import type { ICrudContext } from "../models/ICrudContext";
import { CrudContext } from "./context";

export const CrudProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState<boolean>(false);
  const contextValue: ICrudContext = {
    value: { isNewCardModalOpen },
    dispatch: { setIsNewCardModalOpen },
  };
  return (
    <CrudContext.Provider value={contextValue}>{children}</CrudContext.Provider>
  );
};
