import Cart from "./Cart";
import styles from "../css/Header.module.css";
import food from "../img/food.jpg";

function Header({ orderList, order, setOrder, setOrderList }) {
  return (
    <div>
      <header className={styles["header-content"]}>
        <h2>ReactMeals</h2>
        <Cart
          orderList={orderList}
          order={order}
          setOrder={setOrder}
          setOrderList={setOrderList}
        ></Cart>
      </header>
      <img src={food} alt="Food" />
    </div>
  );
}

export default Header;
