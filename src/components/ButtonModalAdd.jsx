import { useContext, useState } from "react";
import { Global } from "./Global";
import SetOrderListContext from "./SetOrderListContext";

function ButtonModallAdd({ li }) {
  const { setCartModal } = useContext(Global);
  const { setEditedOrder } = useContext(SetOrderListContext);

  const addOneHandler = () => {
    setEditedOrder({
      quantity: Number(li.quantity) + 1,
      id: li.id,
    });
    setCartModal(true);
  };

  return <button onClick={addOneHandler}>+</button>;
}

export default ButtonModallAdd;
