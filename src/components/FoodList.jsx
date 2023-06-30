import styles from "../css/FoodList.module.css";
import { v4 as uuidv4 } from "uuid";

import AddToCart from "./AddToCart";

const menu = [
  {
    id: uuidv4(),
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: "22.99",
    quantity: 0,
  },
  {
    id: uuidv4(),
    name: "Schnitzel",
    desc: "A german speciality",
    price: "16.50",
  },
  {
    id: uuidv4(),
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: uuidv4(),
    name: "Green Bowl",
    desc: "Healthy and green",
    price: "18.99",
  },
];

function FoodList() {
  return (
    <div className={styles["list-container"]}>
      {menu.map((li) => (
        <div key={li.id}>
          <div className={styles.lists}>
            <div className={styles["container-left"]}>
              <p className={styles.name}>{li.name}</p>
              <i>{li.desc}</i>
              <p className={styles.price}>{li.price} &euro;</p>
            </div>
            <AddToCart li={li} menu={menu} />
          </div>
          <div className={styles.border}></div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
