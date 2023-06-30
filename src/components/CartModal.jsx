import styles from "../css/CartModal.module.css";
import AddToCart from "./AddToCart";
import { Global } from "./Global";
import { useContext } from "react";

function CartModal() {
  const { cartModal, order } = useContext(Global);

  console.log(order);

  if (cartModal === false) {
    return "No order yet";
  }
  return (
    <>
      {cartModal ? (
        <div className={styles["list-modal"]} key={order.id}>
          <div className={styles["modal-container"]}>
            <div className={styles["container-left"]}>
              <p className={styles.name}>rrr</p>
              <p className={styles.price}>00</p>
              <p className={styles.amount}></p>
            </div>
            <div className={styles["container-right"]}>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      ) : null}
    </>
  );
}

export default CartModal;
