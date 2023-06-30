import styles from "../css/FoodList.module.css";
import { v4 as uuidv4 } from "uuid";

const menu = [
  {
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: "22.99",
  },
  {
    name: "Schnitzel",
    desc: "A german speciality",
    price: "16.50",
  },
  {
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: "12.99",
  },
  {
    name: "Green Bowl",
    desc: "Healthy and green",
    price: "18.99",
  },
];

function FoodList() {
  return (
    <div className={styles["list-container"]}>
      {menu.map((li) => (
        <>
          <div key={uuidv4()} className={styles.lists}>
            <div className={styles["container-left"]}>
              <p>{li.name}</p>
              <p>{li.desc}</p>
              <p>{li.price}</p>
            </div>
            <div>
              <p>Amount</p>
              <input></input>
              <button>Add</button>
            </div>
          </div>
          <div className={styles.border}></div>
        </>
      ))}
    </div>
  );
}

export default FoodList;
