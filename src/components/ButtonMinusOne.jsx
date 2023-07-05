import { useContext } from "react";
import { Global } from "./Global";
import SetOrderListContext from "./SetOrderListContext";

function ButtonMinusOne({ li }) {
  const { setCartModal } = useContext(Global);
  const { setEditedOrder } = useContext(SetOrderListContext);

  const minusOneHandler = () => {
    setEditedOrder({
      quantity: Number(li.quantity) - 1,
      id: li.id,
      priceTotal: Number(li.price) * Number(li.quantity - 1),
    });
  };

  return <button onClick={minusOneHandler}>-</button>;
}

export default ButtonMinusOne;
