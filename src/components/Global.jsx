import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [ordersNumber, setOrdersNumber] = useState(0);
  const [cartModal, setCartModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorModal, setErrorModal] = useState(true);

  return (
    <Global.Provider
      value={{
        ordersNumber,
        setOrdersNumber,
        cartModal,
        setCartModal,
        setOrderDetails,
        setErrorModal,
        errorModal,
      }}
    >
      {children}
    </Global.Provider>
  );
};
