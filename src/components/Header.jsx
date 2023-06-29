import Cart from "./Cart";
import styles from "../css/Header.module.css";
import { food } from "../img/food.jpg";

function Header() {
  return (
    <div>
      <header className={styles["header-content"]}>
        <h2>ReactMeals</h2>
        <Cart></Cart>
      </header>
      <img src={food} alt="Food" />
    </div>
  );
}

export default Header;
