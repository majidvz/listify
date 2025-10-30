import { useState, type FC, type PropsWithChildren } from "react";
import { IListItem } from "@/models/IListItem";
import type { ICrudContext } from "../models/ICrudContext";
import { IModalInitialValues } from "../models/IModalInitialValues";
import { CrudContext } from "./context";

export const CrudProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState<boolean>(false);
  const [list, setList] = useState<IListItem[]>([]);
  const [modalInitialValues, setModalInitialValues] = useState<
    IModalInitialValues | undefined
  >(undefined);

  const contextValue: ICrudContext = {
    value: { isNewCardModalOpen, list, modalInitialValues },
    dispatch: { setIsNewCardModalOpen, setList, setModalInitialValues },
  };
  return (
    <CrudContext.Provider value={contextValue}>{children}</CrudContext.Provider>
  );
};
