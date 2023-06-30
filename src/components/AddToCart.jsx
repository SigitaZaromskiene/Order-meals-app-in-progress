import styles from "../css/FoodList.module.css";
import Button from "./Button";
import { useState, useContext } from "react";
import { Global } from "./Global";

function AddToCart({ li, menu }) {
  const [inputNumber, setInputNumber] = useState(1);

  const { order, setOrder } = useContext(Global);

  console.log(li);

  const amountHandler = () => {
    const findMenu = () => {
      menu.map((f) => f.id !== li.id);
      return li;
    };
    console.log(findMenu);
  };

  return (
    <div className={styles["container-right"]}>
      <div style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="id" className={styles.amount}>
          Amount
        </label>
        <input
          id="id"
          min="1"
          max="50"
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          style={{ width: "40px", height: "20px", marginLeft: "10px" }}
        ></input>
      </div>
      <Button text="Add"></Button>
    </div>
  );
}

export default AddToCart;
