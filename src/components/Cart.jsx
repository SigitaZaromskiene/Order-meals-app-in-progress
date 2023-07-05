import styles from "../css/Cart.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Global } from "./Global";

function Cart({ orderList }) {
  const { ordersNumber, setCartModal } = useContext(Global);

  const setOrdersNumberHandler = () => {
    if (orderList === null) {
      return;
    }
    const quantity = orderList
      .map((li) => li.quantity)
      .reduce((acc, l) => acc + l, 0);

    return quantity;
  };

  return (
    <>
      <div className={styles.cart} onClick={() => setCartModal(true)}>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Your Cart</p>
        <p className={`${styles.number} ${ordersNumber && styles.change}`}>
          {setOrdersNumberHandler()}
        </p>
      </div>
    </>
  );
}

export default Cart;
