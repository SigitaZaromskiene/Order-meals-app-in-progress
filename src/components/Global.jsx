import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [ordersNumber, setOrdersNumber] = useState(0);

  return (
    <Global.Provider value={{ order, setOrder, ordersNumber, setOrdersNumber }}>
      {children}
    </Global.Provider>
  );
};
