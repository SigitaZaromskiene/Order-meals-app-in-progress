import styles from "../css/CartModal.module.css";
import AddToCart from "./AddToCart";
import { Global } from "./Global";
import { useContext } from "react";

function CartModal({ orderList }) {
  if (orderList === null) {
    return "No order yet";
  }
  return (
    <>
      {orderList.map((li) => (
        <div className={styles["list-modal"]} key={orderList.id}>
          <div className={styles["modal-container"]}>
            <div className={styles["container-left"]}>
              <p className={styles.name}>{li.name}</p>
              <p className={styles.price}>
                {Math.floor(li.price).toFixed(2, 0)} &euro;
              </p>
              <p className={styles.amount}>{li.quantity}</p>
            </div>
            <div className={styles["container-right"]}>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      ))}
    </>
  );
}

export default CartModal;
