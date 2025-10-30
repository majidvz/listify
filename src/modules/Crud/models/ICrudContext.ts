import type { Dispatch, SetStateAction } from "react";
import type { IListItem } from "@/models/IListItem";
import { IModalInitialValues } from "./IModalInitialValues";

export interface ICrudContext {
  value: {
    isNewCardModalOpen: boolean;
    list: IListItem[];
    modalInitialValues: IModalInitialValues | undefined;
  };
  dispatch: {
    setIsNewCardModalOpen: Dispatch<SetStateAction<boolean>>;
    setList: Dispatch<SetStateAction<IListItem[]>>;
    setModalInitialValues: Dispatch<
      SetStateAction<IModalInitialValues | undefined>
    >;
  };
}
