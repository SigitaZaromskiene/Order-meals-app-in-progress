import styles from "../css/Cart.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <>
      <div className={styles.cart}>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Your Cart</p>
        <p className={styles.number}>0</p>
      </div>
    </>
  );
}

export default Cart;
