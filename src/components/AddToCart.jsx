import styles from "../css/FoodList.module.css";
import Button from "./Button";
import { useState, useContext } from "react";
import { Global } from "./Global";

function AddToCart({ li, menu, setOrder }) {
  const [inputNumber, setInputNumber] = useState(0);

  const { setOrdersNumber } = useContext(Global);

  const amountHandler = () => {
    const item = menu.filter((f) => f.id === li.id);

    setOrder({
      name: item[0].name,
      quantity: Number(inputNumber),
      price: Number(item[0].price).toFixed(2, 0),
      priceTotal: Number(item[0].price) * Number(inputNumber),
    });
    setOrdersNumber((n) => Number(n) + Number(inputNumber));
    setInputNumber(0);
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
      <Button text="Add" action={amountHandler}></Button>
    </div>
  );
}

export default AddToCart;
