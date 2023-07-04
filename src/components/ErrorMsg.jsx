import { useContext } from "react";
import styles from "../css/ErrorMsg.module.css";
import { Global } from "./Global";

function ErrorMsg() {
  const { setErrorModal } = useContext(Global);
  const setErrorMsg = () => {
    setErrorModal(false);
  };

  return (
    <div className={styles["list-modal"]}>
      <div className={styles["modal-container"]}>
        <p>No orders yet</p>
      </div>
      <button onClick={setErrorMsg}>Okay</button>
    </div>
  );
}

export default ErrorMsg;
