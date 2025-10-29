import type { Dispatch, SetStateAction } from "react";

export interface ICrudContext {
  value: {
    isNewCardModalOpen: boolean;
  };
  dispatch: { setIsNewCardModalOpen: Dispatch<SetStateAction<boolean>> };
}
