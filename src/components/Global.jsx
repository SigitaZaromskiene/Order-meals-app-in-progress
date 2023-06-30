import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [order, setOrder] = useState("");

  return (
    <Global.Provider value={{ order, setOrder }}>{children}</Global.Provider>
  );
};
