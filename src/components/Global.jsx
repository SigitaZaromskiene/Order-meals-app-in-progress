import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [ordersNumber, setOrdersNumber] = useState(0);
  const [cartModal, setCartModal] = useState(false);

  return (
    <Global.Provider
      value={{
        ordersNumber,
        setOrdersNumber,
        cartModal,
        setCartModal,
      }}
    >
      {children}
    </Global.Provider>
  );
};
