import { useContext } from "react";
import styles from "../css/ErrorMsg.module.css";
import { Global } from "./Global";

function ErrorMsg() {
  const { setErrorModal, setCartModal } = useContext(Global);

  const modalsHandler = () => {
    setErrorModal(false);
    setCartModal(null);
  };

  return (
    <div className={styles["list-modal"]}>
      <div className={styles["modal-container"]}>
        <p className={styles.p}>No orders yet</p>
        <button onClick={modalsHandler}>Okay</button>
      </div>
    </div>
  );
}

export default ErrorMsg;
