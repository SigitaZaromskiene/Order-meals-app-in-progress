import Cart from "./Cart";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <header className={styles["header-content"]}>
      <h2>ReactMeals</h2>
      <Cart></Cart>
    </header>
  );
}

export default Header;
