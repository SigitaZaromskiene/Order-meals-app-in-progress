import styles from "../css/Cart.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Global } from "./Global";

function Cart() {
  const { ordersNumber, setCartModal } = useContext(Global);

  const cartModalOpenHandler = () => {
    setCartModal(true);
  };

  return (
    <>
      <div className={styles.cart} onClick={cartModalOpenHandler}>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Your Cart</p>
        <p className={`${styles.number} ${ordersNumber && styles.change}`}>
          {ordersNumber}
        </p>
      </div>
    </>
  );
}

export default Cart;
