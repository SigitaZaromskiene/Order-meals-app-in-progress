import { useContext, useState } from "react";
import { Global } from "./Global";
import SetOrderListContext from "./SetOrderListContext";

function ButtonModallAdd({ li }) {
  const { setEditedOrder } = useContext(SetOrderListContext);

  const addOneHandler = () => {
    setEditedOrder({
      quantity: Number(li.quantity) + 1,
      id: li.id,
      priceTotal: Number(li.price) * Number(li.quantity + 1),
    });
  };

  return <button onClick={addOneHandler}>+</button>;
}

export default ButtonModallAdd;
