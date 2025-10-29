import { createContext, useContext } from "react";
import { type ICrudContext } from "../models/ICrudContext";

export const CrudContext = createContext<ICrudContext | undefined>(undefined);

export const useCrudContext = () => {
  const data = useContext(CrudContext);
  if (data) return data;
  else throw new Error("CRUD context doesn't exist.");
};
