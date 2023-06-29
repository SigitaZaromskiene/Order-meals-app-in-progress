import styles from "../css/Cart.module.css";

function Cart() {
  return (
    <>
      <div className={styles.cart}>
        <p>Your Cart</p>
        <p className={styles.number}>0</p>
      </div>
    </>
  );
}

export default Cart;
