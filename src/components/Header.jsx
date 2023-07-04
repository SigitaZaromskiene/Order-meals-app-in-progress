import Cart from "./Cart";
import styles from "../css/Header.module.css";
import food from "../img/food.jpg";

function Header({ orderList, order }) {
  return (
    <div>
      <header className={styles["header-content"]}>
        <h2>ReactMeals</h2>
        <Cart orderList={orderList} order={order}></Cart>
      </header>
      <img src={food} alt="Food" />
    </div>
  );
}

export default Header;
